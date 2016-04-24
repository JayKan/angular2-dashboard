import { Component, ViewEncapsulation } from 'angular2/core';

@Component({
  selector: 'user-profile-widget',
  template:`
  <center class="profile">
    <a><img src="assets/images/profile-icon.png" class="profile-icon" /></a>
    <div class="text-center avatar-name">Jay Kan</div>
  </center>
  `,
  encapsulation: ViewEncapsulation.None,
  styles: [`
  .profile .avatar-name {
      padding-top: 12px;
      font-size: 14px;
  }
  .profile .profile-icon {
      border-radius: 50%;
      width: 125px;
  }
  .profile a {
       cursor: pointer;
  }
  `]
})
export class UserProfileWidget {
  
}