import { Component } from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
  selector: 'registration',
  templateUrl:'components/registration/registration.template.html',
  styleUrls: ['components/registration/registration.component.css']
})
export class RegistrationComponent {
  constructor(private _router: Router) {

  }
  navigateTo(destination): void {
    this._router.navigate(destination);
  }
  
}