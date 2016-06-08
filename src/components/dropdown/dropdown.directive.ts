import { Directive, OnInit, OnDestroy, Input, Output, HostBinding, EventEmitter, ElementRef, Query, QueryList } from '@angular/core';
import { dropDownService, NONINPUT } from './dropdown.service';

@Directive({selector: '[dropdown]'})
export class Dropdown implements OnInit, OnDestroy {
  
  @HostBinding('class.open')
  @Input() public get isOpen(): boolean {
    return this._isOpen;
  }
  
  /* `autoClose` property-biding */
  @Input() public autoClose: string;
  @Input() public keyboardNav: boolean;
  @Input() public appendToBody: boolean;
  
  @Output() public onToggle: EventEmitter<boolean>     = new EventEmitter();
  @Output() public isOpenChange: EventEmitter<boolean> = new EventEmitter();
  
  @HostBinding('class.dropdown') private addClass: boolean = true;
  
  private _isOpen: boolean;

  /**
   * @public 
   * @property selectedOption {number}
   * @description index of the selected element.
   */
  public selectedOption: number;
  /**
   * @public 
   * @property menuEl {ElementRef}
   * @description dropdown menu html
   */
  public menuEl: ElementRef;
  /**
   * @public 
   * @property toggleEl {ElementRef}
   * @description drop own toggle element
   */
  public toggleEl: ElementRef;

  constructor(private _el: ElementRef,
              @Query('dropdownMenu', {descendants: false}) dropdownMenuList: QueryList<ElementRef>) {}

  ngOnInit(): void {
    this.autoClose = this.autoClose || NONINPUT;
  }

  ngOnDestroy(): void {
    if (this.appendToBody && this.menuEl) {
      this.menuEl.nativeElement.remove();
    }
  }
  
  public set isOpen(value) {
    this._isOpen = !!value;  
    
    if (this.isOpen) {
      // if dropdown is open make sure focus is on.
      this.focusToggleElement();
      dropDownService.open(this);
    } else {
      dropDownService.close(this);
      this.selectedOption = null;
    }
    this.onToggle.emit(this.isOpen);
    this.isOpenChange.emit(this.isOpen);
  }
  
  public set dropDownMenu(dropdownMenu: {el: ElementRef}) {
    // initialize dropdown menu
    this.menuEl = dropdownMenu.el;
    
    if (this.appendToBody) {
      window.document.body.appendChild(this.menuEl.nativeElement);
    }
  }
  
  public set dropDownToggle(dropdownToggle: {el: ElementRef}) {
    // initialize toggle element
    this.toggleEl = dropdownToggle.el;
  }
  
  public toggle(open?: boolean): boolean {
    return this.isOpen = arguments.length ? !!open : !this.isOpen;
  }
  
  public focusDropdownEntry(keyCode: number): void {
    
    let hostEl = this.menuEl ?
        this.menuEl.nativeElement : this._el.nativeElement.getElementsByTagName('ul')[0];
    
    if (!hostEl) {
      return;
    }
    
    let elements = hostEl.getElementsByTagName('a');
    
    if (!elements || !elements.length) {
      return;
    }
    
    switch (keyCode) {
      case (40):
        if (typeof this.selectedOption !== 'number') {
          this.selectedOption = 0;
          break;
        }
        if (this.selectedOption === elements.length - 1) {
          break;
        }
        
        this.selectedOption++;
        break;
      
      case(38):
        if (typeof this.selectedOption !== 'number') {
          return;
        }
        
        if (this.selectedOption === 0) {
          break;
        }
        
        this.selectedOption--;
        break;
    }
    
    elements[this.selectedOption].focus();
  }
  
  public focusToggleElement(): void {
    if (this.toggleEl) {
      this.toggleEl.nativeElement.focus();
    }
  }
}