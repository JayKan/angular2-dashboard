import { Component, ViewEncapsulation, Input, ChangeDetectionStrategy } from '@angular/core';

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
  styleUrls: ['components/container/container.css']
})
export class Container {
  @Input() headerStyle: string;
}
