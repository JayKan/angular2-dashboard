import { Component } from '@angular/core';
import { ModalInstance } from './modal-instance';

@Component({
  selector: 'modal-body',
  template:`
  <div class="modal-body">
    <ng-content></ng-content>
  </div>
  `
})
export class ModalBodyComponent {
  constructor(private _modal: ModalInstance) {}
}