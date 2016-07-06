import { Type } from '@angular/core';

import { ModalComponent } from './components/modal';
import { ModalHeaderComponent } from './components/modal-header';
import { ModalFooterComponent } from './components/modal-footer';
import { AutofocusDirective } from './directives/autofocus';

export const MODAL_DIRECTIVES: Type[] = [
  ModalComponent,
  ModalHeaderComponent,
  ModalFooterComponent,
  AutofocusDirective
];

