import { Component, Input } from '@angular/core';
import { ModalInstance } from './modal-instance';

@Component({
  selector: 'modal-header',
  template: `
  <div class="modal-header">
    <button *ngIf="showClose"
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            (click)="_modal.dismiss()">
      <span aria-hidden="true">&times;</span>        
    </button>
    <ng-content></ng-content>
  </div>
  `
})
export class ModalHeaderComponent {
  @Input('show-close') showClose: boolean = false;
  constructor(private _modal: ModalInstance) {}
}