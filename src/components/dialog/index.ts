import { MdDialog } from './dialog';
import { MdDialogTitle } from './dialog-title';
import { MdDialogActions } from './dialog-actions';
import { MdDialogPortal } from './dialog-portal';

export * from './dialog';
export * from './dialog-actions';
export * from './dialog-portal';
export * from './dialog-title';


export const DIALOG_DIRECTIVES: any[] = [
  MdDialog,
  MdDialogActions,
  MdDialogTitle,
  MdDialogPortal
];
