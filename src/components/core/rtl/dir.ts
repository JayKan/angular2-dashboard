import  { Directive, HostBinding, Output, Input, EventEmitter } from '@angular/core';

export type LayoutDirection = 'ltr' | 'rtl';

/**
 * Directive to listen to changes of direction of part of the DOM.
 *
 * Applications should use this directive instead of the native attributes so that Material
 * components can listen on changes of direction.
*/
@Directive({
  selector: '[dir]',
  exportAs: '$implicit'
})
export class Dir {
  // default direction is `left to right`
  @Input('dir') private _dir: LayoutDirection = 'ltr';

  // notify outside
  @Output() dirChange = new EventEmitter<void>();

  // Host binding
  // sets `attr.dir` class when get dir() return true?
  @HostBinding('attr.dir')
  get dir(): LayoutDirection {
    return this._dir;
  }
  set dir(v: LayoutDirection) {
    let old = this._dir;
    this._dir = v;
    if (old !== this._dir) {
      // set the new value, emit dirChange
      this.dirChange.emit(null);
    }
  }

  // `Dir` instance value's getter and setter?
  get value(): LayoutDirection { return this.dir; }
  set value(v: LayoutDirection) { this.dir = v; }
}