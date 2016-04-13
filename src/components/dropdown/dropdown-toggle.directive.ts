import { Directive, ElementRef, Host, OnInit, Input, HostBinding, HostListener } from 'angular2/core';
import { Dropdown } from './dropdown.directive';

@Directive({ selector: '[dropdownToggle]' })
export class DropdownToggle implements OnInit {
  @HostBinding('class.disabled')
  @Input() private disabled: boolean = false;
  
  @HostBinding('class.dropdown-toggle')
  @HostBinding('attr.aria-haspopup')
  private addClass = true;
  
  constructor(@Host() public dropdown: Dropdown, public el: ElementRef) {}
  
  ngOnInit(): void {
    this.dropdown.dropDownToggle = this;
  }
  
  @HostBinding('attr.aria-expanded')
  public get isOpen(){
    return this.dropdown.isOpen;
  }
  
  @HostListener('click', ['$event'])
  public toggleDropdown(event: MouseEvent): boolean {
    event.stopPropagation();
    
    if (!this.disabled) {
      this.dropdown.toggle();  
    }
    return false;
  }
  
}