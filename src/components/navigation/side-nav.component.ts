import { Component, ViewEncapsulation } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
  selector: 'side-nav',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'components/navigation/side-nav.component.html',
  directives: [ROUTER_DIRECTIVES],
  styles: [`
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
    .sidebar-left-zero {
        left: 0 !important;
    }

    .main-container-ml-zero {
        margin-left: 235px !important;
        margin-right: -235px !important;
    }
    
    @media screen and (max-width: 768px) {
        #sidebar {
            left: -235px;
        }
        .main-container {
            margin-left: 0 !important;
        }
    }
  `
  ]
})

export class SideNavComponent {
  constructor(){}
}