import { Component, ViewEncapsulation } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
  selector: 'side-nav',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'components/navigation/side-nav.component.html',
  directives: [ROUTER_DIRECTIVES],
  styles: [`
    .sidebar-left-zero {
        left: 0 !important;
    }

    .main-container-ml-zero {
        margin-left: 235px !important;
        margin-right: -235px !important;
    }
    
    #sidebar {
        width: 235px;
        position: fixed;
        top: 0;
        bottom: 0;
        color: #FFF;
        background: #2c3e50;
        -webkit-transition: all .2s ease-in-out;
        -moz-transition: all .2s ease-in-out;
        -ms-transition: all .2s ease-in-out;
        -o-transition: all .2s ease-in-out;
        transition: all .2s ease-in-out;        
    }
    
    #sidebar .profile-icon {
        border-radius: 50%;
    }
    
    #sidebar a {
        cursor: pointer;
    }
    #sidebar .sidenav-outer {
        position: absolute;
        top: 50px;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: hidden;
    }

    #sidebar div.side-widgets {
        margin-left: 45px;
        color: rgba(255, 255, 255, 0.8);
        float: left;
        border-top: 1px solid #212f3c;
        width: 190px;
        position: absolute;
        left: 0;
    }

    #sidebar div.side-widgets .widgets-header {
        text-align: center;
        padding: 15px;
        height: 50px;
        color: rgba(255, 255, 255, 0.8);
        font-size: 15px;
        font-weight: 600;
    }   
    
    #sidebar div.side-menu {
        width: 45px;
        background: #1a252f;
        position: absolute;
        top: 0;
        bottom: 0;
        z-index: 999;
        float: left;
    }
    
    #sidebar div.side-menu .menu-header {
        height: 50px;
        padding: 8px;
    }
    
    #sidebar div.side-menu .menu-body {
        width: 45px;
        border-top: 1px solid #507192;
        margin-top: -2px;
    }
    
    #sidebar div.side-menu .menu-body ul.sidenav {
        list-style-type: none;
        padding: 0;
    }

    #sidebar div.side-menu .menu-body ul.sidenav li {
        position: relative;
        margin-top: -1px;
        height: 44px;
    }
    
    #sidebar div.side-menu .menu-body ul.sidenav li a {
        color: rgba(255, 255, 255, 0.8);
        border-radius: 0;
        transition: all .12s linear;
        padding: 14px 0;
        display: inline;
    }
    
    #sidebar div.side-menu .menu-body ul.sidenav li a i {
        font-size: 18px;
        padding: 14px 13px 13px 15px;        
    }
    
    #sidebar div.side-menu .menu-body ul.sidenav li a:hover {
        color: #fff;
    }
    
    #sidebar div.side-menu .menu-body ul.sidenav li a:hover ui.nested-dropdown li {
        background: #FFF;
        color: #2c3e50;
    }
    
    #sidebar div.side-menu .menu-body ul.sidenav li a:hover, #sidebar div.side-menu .menu-body ul.sidenav li a:focus, #sidebar div.side-menu .menu-body ul.sidenav li a:active {
        background: #2c3e50;
        color: #fff;
    }

    #sidebar div.side-menu .menu-body ul.sidenav li .router-link-active {
        background: #2c3e50;
    }
    
    #sidebar div.side-menu .menu-body ul.sidenav li ul.nested-dropdown {
        display: none;
        list-style: none;
        position: absolute;
        top: 0;
        left: 45px;
        background: white;
        padding-left: 0;
        width: 190px;
        min-height: 40px;
        margin-top: 2px;
    }
    
    #sidebar div.side-menu .menu-body ul.sidenav li ul.nested-dropdown li {
        min-height: 24px;
        color: #233140;
    }
    
    #sidebar div.side-menu .menu-body ul.sidenav li ul.nested-dropdown li a {
        color: #2c3e50;
        display: block;
        padding: 12px;
        height: auto;
        font-size: 14px;
    }
    
    #sidebar div.side-menu .menu-body ul.sidenav li ul.nested-dropdown li a:hover, #sidebar div.side-menu .menu-body ul.sidenav li ul.nested-dropdown li a:focus, #sidebar div.side-menu .menu-body ul.sidenav li ul.nested-dropdown li a:active {
        color: #233140;
        background: #f8f8f8;
        text-decoration: none;
        padding-bottom: 11px;
    }
    
    #sidebar div.side-menu .menu-body ul.sidenav li ul.nested-dropdown li.sidemenu-header {
        text-transform: uppercase;
        min-height: 38px;
        padding-top: 12px;
        padding-left: 12px;
        border-bottom: 1px solid #eee;
        font-size: 12px;
        font-weight: bold;
        line-height: 21px;
        color: #233140;
    }
    
    #sidebar div.side-menu .menu-body ul.sidenav li ul.nested-dropdown li.sidemenu-header a {
        color: #233140;
    }
    
    #sidebar div.side-menu .menu-body ul.sidenav li:hover ul.nested-dropdown {
        display: block;
    }
    
    #sidebar div.side-menu .menu-body ul.sidenav li:hover ul.nested-dropdown li .router-link-active {
        color: #2c3e50;
        background: #FFF;
    }
    
    #sidebar div.side-widgets .widgets-content {
        padding: 12px;
        overflow: hidden;
    }

    #sidebar div.side-widgets .widgets-content .avatar-name {
        padding-top: 12px;
        font-size: 14px;
    }
    
    #sidebar div.side-widgets .widgets-content .calendar-container {
        margin-top: 10px;
    }
    
    #sidebar div.side-widgets .widgets-content .news-feed .feed-header {
        text-transform: uppercase;
        margin-left: -12px;
        margin-right: -12px;
        height: 27px;
        padding-top: 6px;
        padding-left: 12px;
        font-size: 10px;
        margin-top: 10px;
        background: #1a252f;
    }
    
    #sidebar div.side-widgets .widgets-content .news-feed .feed-content {
        margin-top: 4px;
    }
    
    #sidebar div.side-widgets .widgets-content .news-feed .feed-content ul {
        list-style-type: none;
        padding: 0;
    }
    
    #sidebar div.side-widgets .widgets-content .news-feed .feed-content ul li {
        height: 40px;
        padding-top: 4px;
        font-size: 10.5px;
    }
    
    #sidebar div.side-widgets .widgets-content .news-feed .feed-content ul li .feed-date {
        float: right;
        font-size: 9px;
        padding-right: 5px;
        color: #eee;
    }
    
    #sidebar div.side-widgets .widgets-content .news-feed .feed-content ul li a {
        color: inherit;
    }
    
    #sidebar div.side-widgets .widgets-content .news-feed .feed-content ul li a:hover, #sidebar div.side-widgets .widgets-content .news-feed .feed-content ul li a:focus {
        color: white;
        text-decoration: none;
    }

   
    @media screen and (max-width: 768px) {
        #sidebar {
            left: -235px;
        }
        .main-container {
            margin-left: 0;
        }
    }
  `
  ]
})

export class SideNavComponent {
  constructor(){}
}