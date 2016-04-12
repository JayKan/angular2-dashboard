import { Component, ViewEncapsulation } from 'angular2/core';
import { Router } from 'angular2/router';
import { CORE_DIRECTIVES } from 'angular2/common';

@Component({
  selector: 'top-nav',
  templateUrl: 'components/navigation/top-nav.component.html',
  directives: [CORE_DIRECTIVES],
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .topnav-navbar {
      background: #FFF;
      border-radius: 0;
      border: none;
      border-bottom: solid 1px rgba(0, 0, 0, 0.05);
      padding: 0;
      height: 50px;
      font-size: 0.875rem;
      margin-bottom: 0;
    }
    .topnav-navbar .navbar-brand {
      width: 235px;
      background: #2c3e50;
      padding: 15px 0;
      color: #7997b5;
      /*padding-left: 65px;*/
      font-size: 18px;
      line-height: 20px; 
    }
    ul.nav {
      padding-left: 0;
      margin-bottom: 0;
      list-style: none;  
    }
    ul.nav.navbar-nav {
      margin: 0;
    }
    ul.nav.navbar-nav .nav-item {
      float: left;
    }
    @media screen and (max-width: 768px) {
      .theme-name {
        position: absolute;
        width: 200px;
        margin: 0 auto;
        left: 0;
        right: 0;
        top: 12px;
        color: #FFF;
        font-size: 18px;
        padding: 0 30px; 
      }
      .theme-name:hover {
        text-decoration: none;
        color: #FFF; 
      }
      .topnav-navbar {
        background: #2c3e50;
      }
      .topnav-navbar #sidebar-toggler {
        background: #2c3e50;
        border: none;
        color: #FFF;
        font-size: 2.83rem;
        padding: 3px 0 0 13px; 
      }
      .topnav-navbar #sidebar-toggler:focus {
        outline: none; 
      }
      .hidd .dropdown a img {
        cursor: pointer;
        width: 35px;
        margin: 8px 15px 0 0;
      }

      .hidd .dropdown a:after {
          display: none;
      }
  
      .hidd .dropdown .dropdown-menu {
          left: auto;
          right: 0;
          top: 48px;
      }
  
      .hidd .dropdown .dropdown-menu a {
          margin: -8px 0;
          padding: 10px 15px;
      }
  
      .hidd .dropdown .dropdown-menu a:hover {
          background: #2c3e50;
      }
     
      img.profile-avatar {
        border-radius: 50%;
        cursor: pointer;
        width: 35px;
        margin: 8px 15px 0 0;
      }
    }
  `]
})

export class TopNavComponent {

  constructor(private _router: Router) {
  }
  
}