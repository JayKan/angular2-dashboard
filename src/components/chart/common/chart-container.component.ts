import { Component, ViewEncapsulation } from 'angular2/core';

@Component({
  selector: 'chart-container',
  template: `
  <div id="chart-container">
    <div class="chart-container-header">        
      <ng-content select="container-title"></ng-content>
    </div>
    <div class="chart-container-body">         
      <ng-content select="container-body"></ng-content>
    </div>
    <div class="chart-container-footer">     
      <ng-content select="container-footer"></ng-content>
    </div>
  </div>
  `,
  encapsulation: ViewEncapsulation.None,
  styles: [`
#chart-container {
    clear: both;
    margin-bottom: 25px;
    margin-top: 0;
    padding: 0;
    box-shadow: 3px 3px 8px 1px rgba(0,0,0,.3);
}
#chart-container .chart-container-header {
    -moz-border-bottom-colors: none;
    -moz-border-left-colors: none;
    -moz-border-right-colors: none;
    -moz-border-top-colors: none;
    background-color: #ffffff;
    border-color: #65788C;
    border-image: none;
    border-style: solid solid none;
    border-width: 4px 0 0;
    color: inherit;
    margin-bottom: 0;
    padding: 10px 15px 7px;
    height: 44px;
}


#chart-container .chart-container-header h3 {
    font-size: 15px;
    font-weight: 500;
    margin-top: 3px;
    color: #4E4E4E;
}

#chart-container .chart-container-body {
    background-color: #ffffff;
    color: inherit;
    padding: 20px 5px;
    border-color: #cacaca;
    border-image: none;
    border-style: solid solid none;
    border-width: 1px 0;
    clear: both;
}

#chart-container .chart-container-body container-body {
    display: block;
    position: relative;
    margin-top: -18px;
}

#chart-container .chart-container-footer {
    -moz-border-bottom-colors: none;
    -moz-border-left-colors: none;
    -moz-border-right-colors: none;
    -moz-border-top-colors: none;
    background-color: #ffffff;
    border-color: #cacaca;
    border-image: none;
    border-style: solid solid none;
    border-width: 1px 0 0;
    color: inherit;
    margin-bottom: 0;
    padding: 10px 15px 7px;
    height: 40px;
}
  `]
})
export class ChartContainer {}