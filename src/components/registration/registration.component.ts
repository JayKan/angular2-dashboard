import { Component } from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
  selector: 'registration',
  template:`
    <div class="registration-page animated">
      <div class="row">
        <div class="col-lg-4 col-lg-offset-4">
          <img src="assets/images/profile-icon.png" class="profile-avatar" />
          <h1>Angular2 Dashboard</h1>
          <form role="form">
            <div class="form-content">
              <div class="form-group">
                <input type="text" class="form-control input-underline input-lg" id="" placeholder="Full Name">
              </div>
    
              <div class="form-group">
                <input type="text" class="form-control input-underline input-lg" id="" placeholder="Email">
              </div>
    
              <div class="form-group">
                <input type="password" class="form-control input-underline input-lg" id="" placeholder="Password">
              </div>
              <div class="form-group">
                <input type="password" class="form-control input-underline input-lg" id="" placeholder="Repeat Password">
              </div>
            </div>
            <a type="submit" class="btn rounded-btn" >Register</a>&nbsp;
            <a type="submit" class="btn rounded-btn" (click)="navigateTo(['Login'])"> Log in </a>
          </form>
        </div>	
      </div>
    </div>
  `,
  styleUrls: ['components/registration/registration.component.css']
})
export class RegistrationComponent {
  constructor(private _router: Router) {

  }
  navigateTo(destination): void {
    this._router.navigate(destination);
  }
  
}