import { 
  Component, 
  OnDestroy, 
  Input,
  Output,
  EventEmitter,
  ElementRef,
  HostBinding
} from '@angular/core';
import { ModalInstance, ModalResult } from './modal-instance';

@Component({
  selector: 'modal',
  template: `
    <div class="modal-dialog"
         [ngClass]="{ 'modal-sm': isSmall(), 'modal-lg': isLarge() }">
      <div class="modal-content">
        <ng-content></ng-content>
      </div>     
    </div> 
  `,
  host: {
    'class': 'modal',
    'role': 'dialog',
    'tabindex': '-1'
  }
})
export class ModalComponent implements OnDestroy {
  
  private _overrideSize: string = null;
  
  instance: ModalInstance;
  visible: boolean = false;
  
  
  // `size` value being passed in from cmp.
  @Input() size: string;
  @Input() animation: boolean = true;
  @Input() keyboard: boolean = true;
  @Input() backdrop: string|boolean = true;
  
  @Output() onDismiss: EventEmitter<any> = new EventEmitter(false);
  @Output() onOpen: EventEmitter<any> = new EventEmitter(false);
  @Output() onClose: EventEmitter<any> = new EventEmitter(false);
  
  @HostBinding('class.fade') get fadeClass(): boolean {
    return this.animation;
  }
  @HostBinding('attr.data-keyboard') get dataKeyboardAttr(): boolean {
    return this.keyboard;
  }
  @HostBinding('attr.data-backdrop') get dataBackdropAttr(): string|boolean {
    return this.backdrop;
  }
  constructor(private _element: ElementRef) {
    // 1. Instantiate a new ModalInstance by passing current element reference.
    this.instance = new ModalInstance(this._element);
    
    // 2. Subscribe to `hidden` event stream.
    this.instance.hidden.subscribe(result => {
      // rest instance visibility
      this.visible = this.instance.visible;
      if (result === ModalResult.Dismiss) {
        // emit `dismiss` event to outside of this component so others can do stuffs as well.
        this.onDismiss.emit(undefined);
      }
    });

    // 3. Subscribe to `shown` event stream
    this.instance.shown.subscribe(() => {
      // emit `onOpen` event to outside world.
      this.onOpen.emit(undefined);
    });
    
  }
  ngOnDestroy(): void {
    return this.instance && this.instance.destroy();
  }
  
  public routerCanDeactivate(): any {
    return this.ngOnDestroy();
  }
  
  public open(size: string): Promise<void> {
    if (ModalSize.validSize(size)) {
      this._overrideSize = size;
    }
    return this.instance.open().then(() => {
      this.visible = this.instance.visible;
    });
  }
  
  public close(): Promise<void> {
    return this.instance.close().then(() => {
      // emit `onClose` event stream
      this.onClose.emit(undefined)
    })
  }
  
  public dismiss(): Promise<void> {
    return this.instance.dismiss();
  }
  
  private isSmall(): boolean {
    return this._overrideSize !== ModalSize.Large
      && this.size === ModalSize.Small
      || this._overrideSize === ModalSize.Small;
  }

  private isLarge(): boolean {
    return this._overrideSize !== ModalSize.Small
      && this.size === ModalSize.Large
      || this._overrideSize === ModalSize.Large;
  }
}

export class ModalSize {
  static Small = 'sm';
  static Large = 'lg';
  
  static validSize(size: string) {
    return size && (size === ModalSize.Small || size === ModalSize.Large);
  }
}