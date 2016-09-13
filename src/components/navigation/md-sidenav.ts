import {
  Component,
  AfterContentInit,
  ViewEncapsulation,
  ContentChildren,
  ElementRef,
  HostBinding,
  Input,
  Output,
  QueryList,
  ChangeDetectionStrategy,
  EventEmitter,
  Renderer,
  Optional
} from '@angular/core';
import { NgStyle } from '@angular/common';
import { Dir } from '../core/rtl/dir';
import { PromiseCompleter } from '../core/async/promise-completer';
import { MdError } from '../core/errors/error';
import { BooleanFieldValue } from '../core/annotations/field-value';

/** Exception thrown when two MdSidenav are matching the same side */
export class MdDuplicatedSidenavError extends MdError {
  constructor(align: string) {
    super(`A sidenav was already declared for 'align="${align}"'`);
  }
}

/**
 * <md-sidenav> component.
 *
 * This component corresponds to the drawer of the sidenav.
 *
 */
@Component({
  selector: 'md-sidenav',
  template: '<ng-content></ng-content>',
  host: {
    '(transitionend)': '_onTransitionEnd($event)'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MdSidenav {
  /** Alignment of the sidenav (direction neutral); whether 'start' or 'end' */
  @Input() align: 'start' | 'end' = 'start';

  /** Mode of the sidenav; whether 'over', 'push', or 'side'. */
  @Input() mode: 'over' | 'push' | 'side' = 'over';

  /** Whether the sidenav is opened. */
  @Input('opened') @BooleanFieldValue() private _opened: boolean = false;

  @Output('open-start') onOpenStart = new EventEmitter<void>();

  /** Event emitted when the sidenav is fully opened. */
  @Output('open') onOpen = new EventEmitter<void>();

  /** Event emitted when the sidenav is being closed. Use this to synchronize animations. */
  @Output('close-start') onCloseStart = new EventEmitter<void>();
  /** Event emitted when the sidenav is fully closed. */
  @Output('close') onClose = new EventEmitter<void>();

  constructor(private _elementRef: ElementRef) {}

  /**
   * Whether the sidenav is opened. We overload this because we trigger an event when it
   * starts or end.
   */
  get opened(): boolean { return this._opened; }
  set opened(v: boolean) { this.toggle(v); }

  /**
   * Open this sidenav, and return a Promise that will resolve when it's fully opened, or
   * get rejected if it didn't.
   * @returns {Promise<void>}
   */
  open(): Promise<void> {
    return this.toggle(true);
  }

  /**
   * Close this sidenav, and return a Promise that will resolve when it's fully opened, or
   * get rejected if it didn't.
   * @returns {Promise<void>}
   */
  close(): Promise<void> {
    return this.toggle(false);
  }

  /**
   * Toggle this sidenav. This is equivalent to calling open() when it's already opened, or
   * close() when it's closed.
   */
  toggle(isOpen: boolean = !this.opened): Promise<void> {
    // Shortcut it if we're already opened.
    if (isOpen === this.opened) {
      if (!this._transition) {
        return Promise.resolve(null);
      } else {
        return isOpen ? this._openPromise : this._closePromise;
      }
    }

    this._opened = isOpen;
    this._transition = true;

    if (isOpen) {
      this.onOpenStart.emit(null);
    } else {
      this.onCloseStart.emit(null);
    }

    if (isOpen) {
      if (this._openPromise === null) {
        let completer = new PromiseCompleter<void>();
        this._openPromise = completer.promise;
        this._openPromiseReject = completer.reject;
        this._openPromiseResolve = completer.resolve;
      }
      return this._openPromise;
    } else {
      if (this._closePromise === null) {
        let completer = new PromiseCompleter<void>();
        this._closePromise = completer.promise;
        this._closePromiseResolve = completer.resolve;
        this._closePromiseReject = completer.reject;
      }
      return this._closePromise;
    }
  }

  /**
   * When transition has finished, set the internal state for classes and emit the proper event.
   * The event passed is actually of type TransitionEvent, but that type is not available in
   * Android.
   * @private
   */
  _onTransitionEnd(transitionEvent: TransitionEvent): void {
    if (transitionEvent.target === this._elementRef.nativeElement
        && transitionEvent.propertyName.endsWith('transform')) {
      this._transition  = false;
      if (this._opened) {
        if (this._openPromise !== null) {
          this._openPromiseResolve();
        }
        if (this._closePromise !== null) {
          this._closePromiseResolve();
        }
        this.onOpen.emit(null);
      }
    } else {
      if (this._openPromise !== null) {
        this._openPromiseReject();
      }
      if (this._closePromise !== null) {
        this._closePromiseReject();
      }
      this.onClose.emit(null);
    }

    this._openPromise = null;
    this._closePromise = null;
  }

  @HostBinding('class.md-sidenav-closing') get _isClosing() {
    return !this._opened && this._transition;
  }
  @HostBinding('class.md-sidenav-opening') get _isOpening() {
    return this._opened && this._transition;
  }
  @HostBinding('class.md-sidenav-closed') get _isClosed() {
    return !this._opened && !this._transition;
  }
  @HostBinding('class.md-sidenav-opened') get _isOpened() {
    return this._opened && !this._transition;
  }
  @HostBinding('class.md-sidenav-end') get _isEnd() {
    return this.align === 'end';
  }
  @HostBinding('class.md-sidenav-side') get _modeSide() {
    return this.align === 'side';
  }
  @HostBinding('class.md-sidenav-over') get _modeOver() {
    return this.align === 'over';
  }
  @HostBinding('class.md-sidenav-push') get _modePush() {
    return this.align === 'push';
  }

  /** Internal this is needed by MdSidenavLayout. */
  get _width() {
    if (this._elementRef.nativeElement) {
      return this._elementRef.nativeElement.offsetWidth;
    }
    return 0;
  }

  private _transition: boolean = false;
  private _openPromise: Promise<void>;
  private _openPromiseResolve: () => void;
  private _openPromiseReject: () => void;
  private _closePromise: Promise<void>;
  private _closePromiseResolve: () => void;
  private _closePromiseReject: () => void;
}

/**
 * <md-sidenav-layout> component.
 *
 * This is the parent component to one or two <md-sidenav>s that validates the state internally
 * and coordinate the backdrop and content styling.
 */
@Component({
  selector: 'md-sidenav-layout',
  // Do not use ChangeDetectionStrategy.OnPush. It does not work for this component because
  // technically it is a sibling of MdSidenav (on the content tree) and isn't updated when MdSidenav
  // changes its state.
  encapsulation: ViewEncapsulation.None,
  directives: [NgStyle],
  template:`
  <div class="md-sidenav-backdrop" (click)="_closeModalSidenav()"
       [class.md-sidenav-shown]="_isShowingBackdrop()"></div>
  
  <ng-content select="md-sidenav"></ng-content>
  
  <md-content [ngStyle]="_getStyles()">
    <ng-content></ng-content>
  </md-content>
  `,
  styleUrls: [
    'components/navigation/sidenav.css',
    'components/navigation/sidenav-transitions.css'
  ]
})
export class MdSidenavLayout implements AfterContentInit {
  @ContentChildren(MdSidenav) private _sidenavs: QueryList<MdSidenav>;

  get start() { return this._start; }
  get end() { return this._end; }

  /** The sidenav at the start/end alignment, independent of direction. */
  private _start: MdSidenav;
  private _end: MdSidenav;

  /**
   * The sidenav at the left/right. When direction changes, these will change as well.
   * They're used as aliases for the above to set the left/right style properly.
   * In LTR, _left == _start and _right == _end.
   * In RTL, _left == _end and _right == _start.
   */
  private _left: MdSidenav;
  private _right: MdSidenav;

  constructor(@Optional() private _dir: Dir,
              private _element: ElementRef,
              private _renderer: Renderer) {

  }

  ngAfterContentInit(): void {
    // On changes, assert on consistency.
    this._sidenavs.changes.subscribe(() => this._validateDrawers());
    // loop via contentChildren and register for sidenavToggle
    this._sidenavs.forEach((sidenav: MdSidenav) => this._watchSidenavToggle(sidenav));
    this._validateDrawers();
  }

  /**
   * Validate the state of the sidenav children components.
   */
  private _validateDrawers() {
    // Set both _start and _end to null.
    this._start = this._end = null;

    // Ensure that we have at most one start and one end sidenav.
    this._sidenavs.forEach(sidenav => {
      if (sidenav.align === 'end') {
        if (!this._end !== null) {
          throw new MdDuplicatedSidenavError('end');
        }
        this._end = sidenav;
      } else {
        if (!this._start !== null) {
          throw new MdDuplicatedSidenavError('start');
        }
        this._start = sidenav;
      }
    });

    // Set `_right` and `_left` to null.
    this._right = this._left = null;

    // Detect if we're LTR or RTL.
    if (this._dir === null || this._dir.value === 'ltr') {
      this._left = this._start;
      this._right = this._end;
    } else {
      this._left = this._end ;
      this._right = this._start;
    }
  }

  _closeModalSidenav(): void {
    if (this._start !== null && this._start.mode !== 'side') {
      this._start.close();
    }
    if (this._end !== null && this._end.mode !== 'side') {
      this._end.close();
    }
  }

  _isShowingBackdrop(): boolean {
    return (this._isSidenavOpen(this._start) && this._start.mode !== 'side')
      || (this._isSidenavOpen(this._end) && this._end.mode !== 'side');
  }

  private _isSidenavOpen(side: MdSidenav): boolean {
    return side != null && side.opened;
  }

  /**
   * Subscribes to sidenav events in order to set a class on the main layout element when the sidenav
   * is open and the backdrop is visible. This ensures any overflow on the layout element is properly
   * hidden.
   */
  private _watchSidenavToggle(sidenav: MdSidenav): void {
    if (!sidenav || sidenav.mode === 'side') { return; }
    sidenav.onOpen.subscribe(() => this._setLayoutClass(sidenav, true));
    sidenav.onClose.subscribe(() => this._setLayoutClass(sidenav, false));
  }

  /** Toggles the `md-sidenav-opened` class on the main `md-sidenav-layout` element. */
  private _setLayoutClass(sidenav: MdSidenav, bool: boolean) {
    this._renderer.setElementClass(this._element.nativeElement, 'md-sidenav-opened', bool);
  }

  private _isSidenavOpen(side: any): boolean {
    return side !== null && side.opened;
  }

  /**
   * Return the width of the sidenav, if it's in the proper mode and opened.
   * This may re-layout the view, so do not call this often.
   * @param sidenav
   * @param mode
   */
  private _getSidenavEffectiveWidth(sidenav: any, mode: string): number {
    return (this._isSidenavOpen(sidenav) && sidenav.mode === mode) ? sidenav._width : 0;
  }

  private _getMarginLeft(): number {
    return this._getSidenavEffectiveWidth(this._left, 'side');
  }

  private _getMarginRight(): number {
    return this._getSidenavEffectiveWidth(this._right, 'side');
  }

  private _getPositionLeft(): number {
    return this._getSidenavEffectiveWidth(this._left, 'push');
  }

  private _getPositionRight(): number {
    return this._getSidenavEffectiveWidth(this._right, 'push');
  }

  /**
   * Returns the horizontal offset for the content area.  There should never be a value for both
   * left and right, so by subtracting the right value from the left value, we should always get
   * the appropriate offset.
   */
  private _getPositionOffset(): number {
    return this._getPositionLeft()  - this._getPositionRight();
  }

  _getStyles(): {marginLeft: string, marginRight: string, transform: string} {
    return {
      marginLeft: `${this._getMarginLeft()}px`,
      marginRight: `${this._getMarginRight()}px`,
      transform: `${this._getPositionOffset()}px, 0, 0`
    };
  }
}

export const MD_SIDENAV_DIRECTIVES = [
  MdSidenavLayout,
  MdSidenav
];