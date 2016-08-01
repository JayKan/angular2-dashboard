import {
  Directive,
  OnInit,
  ElementRef,
  Input,
  Output,
  HostBinding,
  Renderer,
  EventEmitter
} from '@angular/core';

@Directive({ selector: '[collapse]' })
export class CollapseDirective implements OnInit {

  @Output() collapsed: EventEmitter<any> = new EventEmitter<any>(false);
  @Output() expanded: EventEmitter<any> = new EventEmitter<any>(false);

  @HostBinding('style.display')
  private display:string;

  // shown
  @HostBinding('class.in')
  @HostBinding('attr.aria-expanded')
  private isExpanded: boolean = true;

  // hidden
  @HostBinding('attr.aria-hidden')
  private isCollapsed: boolean = false;

  // stale state
  @HostBinding('class.collapse')
  private isCollapse: boolean = true;

  // animation state
  @HostBinding('class.collapsing')
  private isCollapsing: boolean = false;

  @Input()
  private set collapse(value: boolean) {
    this.isExpanded = value;
    this.toggle();
  }
  private get collapse(): boolean {
    return this.isExpanded;
  }

  constructor(private _el: ElementRef, private _renderer: Renderer) {}

  ngOnInit(): void {
    // add animation hooks here
  }

  toggle(): void {
    if (this.isExpanded) {
      this.hide();
    } else {
      this.show();
    }
  }

  hide(): void {
    this.isCollapse = false;
    this.isCollapsing = true;

    this.isExpanded = false;
    this.isCollapsed = true;

    this.isCollapse = true;
    this.isCollapsing = false;

    this.display = 'none';
    this.collapsed.emit(event);
  }

  show(): void {
    this.isCollapse = false;
    this.isCollapsing = true;

    this.isExpanded = true;
    this.isCollapsed = false;

    this.display = 'block';
    this.isCollapse = true;
    this.isCollapsing = false;
    this._renderer.setElementStyle(this._el.nativeElement, 'overflow', 'visible');
    this._renderer.setElementStyle(this._el.nativeElement, 'height', 'auto');
    this.expanded.emit(event);
  }
}

