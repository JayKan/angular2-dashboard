import { Component } from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
  selector: 'login',
  template: `
    <div class="login-page animated">
      <div class="row">
        <div class="col-lg-4 col-lg-offset-4">
          <img src="assets/images/profile-icon.png" class="profile-avatar" />
          <h1>Angular2 Dashboard</h1>
          <form role="form">
            <div class="form-content">
              <div class="form-group">
                <input type="text" class="form-control input-underline input-lg" placeholder="Email">
              </div>
    
              <div class="form-group">
                <input type="password" class="form-control input-underline input-lg" placeholder="Password">
              </div>
            </div>
            <a class="btn rounded-btn" (click)="navigateTo(['Login'])">Log in</a>				
            &nbsp;
            <a type="submit" class="btn rounded-btn" (click)="navigateTo(['Registration'])">Register</a>
          </form>
        </div>	
      </div>
    </div>
  `,
  styleUrls: ['components/login/login.component.css']
})
export class LoginComponent {

  constructor(private _router: Router) {}

  navigateTo(instruction): void {
    this._router.navigate(instruction);
  }
  
}