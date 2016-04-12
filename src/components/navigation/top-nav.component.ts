import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { CORE_DIRECTIVES } from 'angular2/common';

@Component({
  selector: 'top-nav',
  templateUrl: 'components/navigation/top-nav.component.html',
  directives: [CORE_DIRECTIVES]
})

export class TopNavComponent {
  constructor(private _router: Router) {
    
  }
  
}