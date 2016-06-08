import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'user-profile-widget',
  template:`
  <center class="profile">
    <a><img src="assets/images/profile-icon.png" class="profile-icon" /></a>
    <div class="text-center avatar-name">Jay Kan</div>
  </center>
  `,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['components/user/profile.style.css']
})
export class UserProfileWidget {
  
}