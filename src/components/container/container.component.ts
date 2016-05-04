import { Component, ViewEncapsulation, Input, ChangeDetectionStrategy } from 'angular2/core';

@Component({
  selector: 'container',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <div id="container">
    <div class="container-header {{  headerStyle }}">
      <ng-content select="table-header"></ng-content>
    </div>
    
    <div class="container-body">
      <ng-content select="table-body"></ng-content>
    </div>
  </div>  
  `,
  styles: [`
  #container {
    position: relative;
    display: block;
    margin-bottom: 10px;
    background-color: #fff;
    border: 1px solid #e5e5e5;
  }
  #container .container-header {
    padding: 10px 14px;
    background-color: #f5f5f5;
    border-bottom: 1px solid #e5e5e5;
  }
  #container .container-header.primary {
    background-color: #2c3e50;
    border-color: #2c3e50;
  }
  #container .container-header.info {
    background-color: #5bc0de;
    border-color: #5bc0de;
  }
  #container .container-header.success {
    background-color: #5cb85c;
    border-color: #5cb85c;    
  }
  #container .container-header.danger {
    background-color: #de6764;
    border-color: #de6764;        
  } 
  #container .container-header.warning {
    background-color: #f0ad4e;
    border-color: #f0ad4e;       
  }
  #container .container-header span.title {
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 16px;
    color: #fff;
  }
  #container .container-header span.title.default {  
    color: #373a3c;
  }
  #container .container-body {
    padding: 14px;
  }
  #container .container-body .table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 16px;
  }
  #container .container-body .table.table-bordered {
    border: 1px solid #eceeef;
  }
  #container .container-body .table thead th {
    vertical-align: bottom;
    border-bottom: 2px solid #eceeef;
  }
  #container .container-body .table th,
  #container .container-body .table td {
    padding: 12px;
    line-height: 1.5;
    border-top: 1px solid #eceeef;
  }  
  `]
})
export class Container {
  @Input() headerStyle: string;
}
