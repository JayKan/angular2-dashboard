import { CONST_EXPR } from 'angular2/src/facade/lang';
import { Dropdown } from './dropdown.directive';
import { DropdownMenu } from './dropdown-menu.directive';
import { DropdownToggle } from './dropdown-toggle.directive';

export const DROPDOWN_DIRECTIVES: any[] = CONST_EXPR([Dropdown, DropdownMenu, DropdownToggle]);