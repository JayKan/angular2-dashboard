import { Component } from 'angular2/core';
import { StatsWidget } from '../../components/stats/stats';

@Component({
  selector: 'home',
  template: `
  <h1>This is Dashboard Home View</h1>
  <div class="animate">
    <div class="row home-row">    
      <div class="col-lg-4 col-xl-3">
        <div></div>
      </div>
    </div>
  </div>   
  `  
})

export class Home {
  
}