import { Dropdown } from './dropdown.directive';

export const ALWAYS = 'always';
export const DISABLED = 'disabled';
export const OUTSIDECLICK = 'outsideClick';
export const NONINPUT = 'nonInput';

export class DropDownService {
  private openScope: Dropdown;
  private dropdownScope: Dropdown;
  
  private closeDropdownBind: EventListener = this.closeDropdown.bind(this);
  private keyBindFilterBind: EventListener = this.keyBindFilter.bind(this);
  
  public open(dropdownScope: Dropdown): void {
    if (!this.openScope) {
      window.document.addEventListener('click', this.closeDropdownBind);
      window.document.addEventListener('keydown', this.keyBindFilterBind);
    }
    
    if (this.openScope && this.openScope !== this.dropdownScope) {
      this.openScope.isOpen = false;
    }
    
    this.openScope = dropdownScope;
  }
  public close(dropdownScope: Dropdown): void {
    if (this.openScope !== dropdownScope) {
      return;
    }
    this.openScope = null;
    window.document.removeEventListener('click', this.closeDropdownBind);
    window.document.removeEventListener('keydown', this.keyBindFilterBind);
  }
  
  private closeDropdown(event: MouseEvent): void {
    
    if (!this.openScope) {
      return;
    }
    
    if (event && this.openScope.autoClose === DISABLED) {
      return;
    }
    
    if (event && this.openScope.autoClose === NONINPUT &&
        this.openScope.menuEl &&
        /input|textarea/i.test((<any> event.target).tagName) &&
        this.openScope.menuEl.nativeElement.contains(event.target)) {
      return;
    }
    
    if (event && this.openScope.autoClose === OUTSIDECLICK && 
        this.openScope.menuEl &&
        this.openScope.menuEl.nativeElement.contains(event.target)) {
      return;
    }
    
    this.openScope.isOpen = false;
  }
  
  private keyBindFilter(event: KeyboardEvent): void {
    
    if (event.which === 27) {
      this.openScope.focusToggleElement();
      this.closeDropdown(null);
      return;
    }
    
    if (this.openScope.keyboardNav && this.openScope.isOpen &&
       (event.which === 38 || event.which === 40)) {
      event.preventDefault();
      event.stopPropagation();
      this.openScope.focusDropdownEntry(event.which);
    }
  }
}

export let dropDownService = new DropDownService();
