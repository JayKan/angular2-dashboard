import { Directive, ElementRef } from '@angular/core';
import { ModalComponent } from '../components/modal';

@Directive({
  selector: '[autofocus]'
})
export class AutofocusDirective {
  constructor(private _el: ElementRef, 
              private _modal: ModalComponent) {
    if (_modal !== null) {
      this._modal.onOpen.subscribe(() => {
        this._el.nativeElement.focus();
      });
    }
  }
}