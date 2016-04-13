import { Directive, ElementRef, Host, OnInit } from 'angular2/core';
import { Dropdown } from './dropdown.directive';

@Directive({selector: '[dropdownMenu]'})
export class DropdownMenu implements OnInit {
  
  ngOnInit(): void {
    
  }
}