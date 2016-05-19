import { Component } from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
  selector: 'login',
  templateUrl: 'components/login/login.template.html',
  styleUrls: ['components/login/login.component.css']
})
export class LoginComponent {

  constructor(private _router: Router) {}

  navigateTo(instruction): void {
    this._router.navigate(instruction);
  }
  
}