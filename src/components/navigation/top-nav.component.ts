import { Component, ViewEncapsulation } from 'angular2/core';
import { Router } from 'angular2/router';
import { CORE_DIRECTIVES } from 'angular2/common';
import { DROPDOWN_DIRECTIVES } from '../dropdown/dropdown';

@Component({
  selector: 'top-nav',
  templateUrl: 'components/navigation/top-nav.component.html',
  directives: [CORE_DIRECTIVES, DROPDOWN_DIRECTIVES],
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
        font-size: 18px;
        line-height: 20px;     
        padding: 15px 0 15px 65px;
        color: #7997b5;          
        float: left;
        margin-right: 16px;

    }
    .topnav-navbar .collapse .navbar-nav .navbar-form {
        margin-top: 0.375rem;
        position: relative;
        padding: 0;
    }

    .topnav-navbar .collapse .navbar-nav .navbar-form .fa-search {
        position: absolute;
        top: 10px;
        left: 0;
        font-size: 15px;
        color: #555;
    }
    .topnav-navbar .collapse .navbar-nav .navbar-form .form-group input {
        padding-left: 20px;
        border: none;
        border-bottom: 1px solid #2c3e50;
        border-radius: 0;
        font-size: 17px;        
        width: 40px;
        transition: all .2s linear;
        margin-right: 20px;
        box-shadow: none;
    }

    .topnav-navbar .collapse .navbar-nav .navbar-form .form-group input:focus {
        width: 200px;
    }
    
    .topnav-navbar .collapse .navbar-nav .nav-item {
        margin-left: 0;
    }
    
    .topnav-navbar .collapse .navbar-nav .nav-item .dropdown > a {
        color: #2c3e50;
    }

    .topnav-navbar .collapse .navbar-nav .nav-item .dropdown > a:hover, .topnav-navbar .collapse .navbar-nav .nav-item .dropdown > a:focus, .topnav-navbar .collapse .navbar-nav .nav-item .dropdown > a:visited, .topnav-navbar .collapse .navbar-nav .nav-item .dropdown > a:active {
        background: #2c3e50 !important;
        color: #FFF;
    }
    
    .topnav-navbar .collapse .navbar-nav .nav-item .dropdown.open > a {
        background: #EEE;
    }
    
    .topnav-navbar .collapse .navbar-nav .nav-item .dropdown-toggle::after {
        display: none;
    }
    
    .topnav-navbar .collapse .navbar-nav .nav-item .dropdown-menu {
        width: 250px;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
        border-radius: 0;
        border: none;
        border-top: 1px solid #eee;
        transition: all .1s linear;
        padding-bottom: 0;
        margin: 0;
    }
    .topnav-navbar .collapse .navbar-nav .nav-item .message .dropdown-menu {
        margin-top: 4px;
    }
    
    .topnav-navbar .collapse .navbar-nav .nav-item .dropdown-menu .dropdown-divider {
        margin-bottom: 0;
    }

    .topnav-navbar .collapse .navbar-nav .nav-item .message #messages-top {
        background: #EEE;
        color: #233140;
        background: none;
        padding: 20px 10px;
        position: relative;
    }
    
    .topnav-navbar .collapse .navbar-nav .nav-item .message #messages-top i {
        font-size: 15px;
        padding: 15px 5px;
    }
    
    .topnav-navbar .collapse .navbar-nav .nav-item .message #messages-top .label {
        position: absolute;
        border-radius: 50%;
        top: 7px;
        right: 5px;
        font-size: 10px;
        font-weight: 300;
        line-height: 11px;
    }
    
    .topnav-navbar .collapse .navbar-nav .nav-item .message #messages-top:hover {
        cursor: pointer;
        background: #2c3e50;
        color: #fff;
    }
    
    .topnav-navbar .collapse .navbar-nav .nav-item .message #messages-top:focus, .topnav-navbar .collapse .navbar-nav .nav-item .message #messages-top:active {
        background: #EEE;
    }
    
    .topnav-navbar .collapse .navbar-nav .nav-item .message .messages-header {
        padding-top: 10px;
        border-top: none;
        font-size: 13px;
        opacity: .7;
        float: none;
        text-align: center;
    }

    .topnav-navbar .collapse .navbar-nav .nav-item .message .messages-header:hover {
        background: none;
    }
    
    .topnav-navbar .collapse .navbar-nav .nav-item .message .dropdown-messages {
        border-bottom: 1px solid #eee;
        border-top: none;
        padding: 0 10px 5px 20px;
    }
    
    .topnav-navbar .collapse .navbar-nav .nav-item .message .dropdown-messages a {
        color: #333;
        padding: 0;
    }
    
    .topnav-navbar .collapse .navbar-nav .nav-item .message .dropdown-messages a:hover {
        background: none;
    }
    
    .topnav-navbar .collapse .navbar-nav .nav-item .message .dropdown-messages a:focus {
        text-decoration: none;
        outline: none;
    }
    
    .topnav-navbar .collapse .navbar-nav .nav-item .message .dropdown-messages .message-sender {
        padding-top: 5px;
        font-weight: 600;
        font-size: 13px;
    }
    
    .topnav-navbar .collapse .navbar-nav .nav-item .message .dropdown-messages .message-header {
        font-size: 11px;
        padding-top: 3px;
        opacity: .7;
    }
    
    .topnav-navbar .collapse .navbar-nav .nav-item .message .dropdown-messages .notification {
        font-size: 11px;
        padding: 10px 0 6px;
    }
    
    .topnav-navbar .collapse .navbar-nav .nav-item .message .dropdown-messages .notification i {
        padding-right: 10px;
    }
    
    .topnav-navbar .collapse .navbar-nav .nav-item .message .dropdown-messages:hover {
        background: #2c3e50;
    }
    
    .topnav-navbar .collapse .navbar-nav .nav-item .message .dropdown-messages:hover a {
        color: rgba(255, 255, 255, 0.7);
    }
    
   
    
    .topnav-navbar .collapse .navbar-nav .profile {
        margin-right: 10px;
    }
    
    .topnav-navbar .collapse .navbar-nav .profile .dropdown-menu {
        padding: 0;
        width: 150px;
        min-width: 150px;
        left: auto;
        right: 0;
        margin-top: 0;
    }
    .topnav-navbar .collapse .navbar-nav .profile .dropdown-menu li a {
        color: #000;
        font-size: 14px;
        padding: 10px 15px;
        border-bottom: 1px solid #d9d9d9; 
    }
    
    .topnav-navbar .collapse .navbar-nav .profile a {
        padding: 7px;
        color: #2c3e50;
        display: block;
        cursor: pointer;
    }
    
    .topnav-navbar .collapse .navbar-nav .profile a img {
        width: 35px;
        margin-right: 5px;
        border-radius: 50%;
    }
    
    .topnav-navbar .collapse .navbar-nav .profile ul.dropdown-menu li a:hover {
        background: #2c3e50;
    }
    
    .label-pill {
        padding-right: .6em;
        padding-left: .6em;
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
    .open > .dropdown-menu {
        display: block;
    }
    .open > a {
        outline: 0;
    }
    .float-right {
        float: right;
    }
    .navbar-nav .open .dropdown-menu {
      position: absolute;           
       background-color: #fff;
      -webkit-background-clip: padding-box;
      background-clip: padding-box;
      border: 1px solid #ccc;      
      margin-top: 2px;
      border-radius: 0;
      -webkit-box-shadow: 0 6px 12px rgba(0,0,0,.175);
      box-shadow: 0 6px 12px rgba(0,0,0,.175);      
    }
    
   
    .navbar.topnav-navbar .navbar-toggleable-sm .nav {
      padding-left: 0;
      margin-bottom: 0;
      list-style: none;
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
      
      .navbar-nav.hidd .dropdown a img {
        cursor: pointer;
        width: 35px;
        margin: 8px 15px 0 0;
      }

      .navbar-nav.hidd .dropdown a:after {
          display: none;
      }
  
      .navbar-nav.hidd .dropdown .dropdown-menu {
          left: auto;
          right: 0;
          top: 48px;
      }
  
      .navbar-nav.hidd .dropdown .dropdown-menu a {
          margin: -8px 0;
          padding: 10px 15px;
      }
      .navbar-nav.hidd .dropdown .dropdown-item {
          display: block;
          width: 100%;
          padding: 3px 20px;
          clear: both;
          font-weight: normal;
          line-height: 1.5;
          color: #373a3c;
          text-align: inherit;
          white-space: nowrap;
          background: none;
          border: 0;
      }
  
      .navbar-nav.hidd .dropdown .dropdown-menu a:hover {
          background: #2c3e50;
          color: #fff;
      }
     
      img.profile-avatar {
        border-radius: 50%;
        cursor: pointer;
        width: 35px;
        margin: 8px 15px 0 0;
      }
      
    }
   
    @media screen and (min-width: 768px) {
      .hidden-md-up {
        display: none !important;
      }
      .navbar-toggleable-sm {
        display: block !important;
      }
    }
    
    @media screen and (max-width: 991px) {
      .hidden-md-down {
        display: none !important;
      }
    }
    
  `]
})

export class TopNavComponent {

  constructor(private _router: Router) {

  }

  toggleSidebar(): void {
    console.log('Clicked sidbar dropdwon');
    let sidebar: any = $('#sidebar');
    let mainContainer: any = $('.main-container');
    sidebar.toggleClass('sidebar-left-zero');
    mainContainer.toggleClass('main-container-ml-zero');
  }
}