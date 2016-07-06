import { ElementRef } from '@angular/core';
import { toPromise,  booleanOrValue } from './utils';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromEvent';
declare var jQuery: any;

// function booleanOrValue(value) {
//   if (value === 'true')
//     return true;
//   else if (value === 'false')
//     return false;
//   return value;
// }
//
// function toPromise<T>(observable: Observable<T>): Promise<T> {
//   return new Promise((resolve, reject) => {
//     observable.subscribe(next => {
//       resolve(next);
//     }, error => {
//       reject(error);
//     });
//   });
// }

export class ModalInstance {
  
  private _suffix: string = '.ng2-bs3-modal';
  private _shownEventName: string = 'shown.bs.modal' + this._suffix;
  private _hiddenEventName: string = 'hidden.bs.modal' + this._suffix;
  private _$modal: any;
  
  shown: Observable<any>;
  hidden: Observable<ModalResult>;
  result: ModalResult;
  
  visible: boolean = false;
  
  constructor(private _element: ElementRef) {
    // initialize our new modal instance 
    this._init();
  }
  
  open(): Promise<any> {
    return this.show();
  }

  close(): Promise<any> {
    // set current result to `Close`
    this.result = ModalResult.Close;
    // then return a promise
    return this._hide();
  }
  
  dismiss(): Promise<any> {
    // set current result `Dismiss`
    this.reuslt = ModalResult.Dismiss;
    // then return a promise
    return this._hide();
  }
  
  show(): Promise<any> {
    let promise: Promise<any> = toPromise(this.shown);
    this._resetData();
    this._$modal.modal();
    return promise;
  }
  
  
  destroy(): Promise<any> {
    return this._hide().then(() => {
      if (this._$modal) {
        this._$modal.data('bs.modal', null);
        this._$modal.remove();
      }
    })
  }
  
  private _hide(): Promise<ModalResult> {
    if (this._$modal && this.visible) {
      let promise = toPromise(this.hidden);
      this._$modal.modal('hide');
      return promise;
    }
    return Promise.resolve(this.result);  
  }
  
  private _resetData(): void {
    // remove all $modal data, backdrop and keyboard value
    this._$modal.removeData();
    this._$modal.data('backdrop', booleanOrValue(this._$modal.attr('data-backdrop')));
    this._$modal.data('keyboard', booleanOrValue(this._$modal.attr('data-keyboard')));
  }
  
  private _init(): void {
    // grab $modal instance using jQuery
    this._$modal = jQuery(this._element.nativeElement);
    // append it to the body element
    this._$modal.appendTo('body');
    
    // set shown to `observable`
    this.shown = Observable.fromEvent(this._$modal, this._shownEventName)
      .map(() => {
        this.visible = true;
      });
    
    // set hidden to `observable`
    this.hidden = Observable.fromEvent(this._$modal, this._hiddenEventName)
      .map(() => {
        let result = (!this.result || this.result === ModalResult.None)
          ? ModalResult.Dismiss : this.result;
        
        // reset current result to `None`
        this.result = ModalResult.None;
        this.visible = false;
        
        return result;
      });
    
  }
}


export enum ModalResult {
  None,
  Close,
  Dismiss
}

