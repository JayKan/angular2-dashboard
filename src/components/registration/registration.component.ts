import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';

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