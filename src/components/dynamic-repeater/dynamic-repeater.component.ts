import { Component, ContentChild, TemplateRef, ViewEncapsulation } from '@angular/core';
import { createTemplateRenderer } from './template-renderer.directive';

@Component({
  selector: 'dynamic-repeater',
  encapsulation: ViewEncapsulation.None,
  inputs: [ 'items' ],

  // Here we are querying for the <template #itemRenderer> tags in the content.
  queries: {
    itemTemplateRef: new ContentChild('itemRenderer')
  },
  // Here we provide a dynamically-generated directive that exposes custom
  // inputs that we want to pass to our item renderer. In this case, we want to
  // expose "context.item" and "context.index". This will return a directive with
  // the selector, "template[render]", which are using in our view.
  directives: [
    createTemplateRenderer('item', 'index')
  ],
  template:`
    <header class="flex">
      <p>Dynamic Repeater View Widget</p>
    </header>
    
    <dynamic-repeater-body>
      <dynamic-repeater-item *ngFor="let item of items; let index = index;">
                    
        <template 
          [render]="itemTemplateRef"
          [context.item]="item"
          [context.index]="index">        
        </template> 
               
      </dynamic-repeater-item>      
    </dynamic-repeater-body>
    
    <footer class="flex">
      <p>You have {{  items?.length }} item(s) being rendered.</p>
    </footer>
  `,
  styles: [`   
    dynamic-repeater {
      border: 1px dashed #2c3e50;
      display: block;
      padding: 20px;
      background: #f9f9f9;     
      margin: 0;             
    }
    .flex {
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;     
      -webkit-flex-flow: row wrap;
      justify-content: flex-start;
    }       
    dynamic-repeater header *:first-child {
      margin-top: 0;
    }
    dynamic-repeater footer *:last-child {
      margin-bottom: 0;
      margin-top: 10px;
    }           
    dynamic-repeater header,
    dynamic-repeater footer {
       padding: 0 10px;
    }
    dynamic-repeater header p {
        font-size: 16px;
        margin-bottom: 5px;
        font-weight: 400;
    }
    dynamic-repeater-body {     
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;     
      -webkit-flex-flow: row wrap;
      justify-content: space-between;
    }        
    dynamic-repeater-item {      
      padding: 0 10px;
      margin: 10px;     
      text-decoration: none;      
      background: #ffc;
      display: block;
      min-height: 210px;
      width: 200px;     
      -moz-box-shadow: 5px 5px 7px #212121;
      -webkit-box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);
      box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);
      -moz-transition: -moz-transform 0.15s linear;
      -o-transition: -o-transform 0.15s linear;
      -webkit-transition: -webkit-transform 0.15s linear;
    }
    
    dynamic-repeater-item div section {
        text-align: right;
    }   
    dynamic-repeater-item div section > small {
        font-size: 10px;
        font-weight: 500;
    }
    dynamic-repeater-item div h4 {
        margin-top: 15px;
        font-size: 16px;
        font-weight: 600;
    }    
    dynamic-repeater-item div p {
        font-size: 13px;
        font-weight: 400;
    }
   
    dynamic-repeater-body > dynamic-repeater-item > div {
        position: relative;
        min-height: 205px;
    }
    
    dynamic-repeater-body > dynamic-repeater-item > div section.bottom {
        position: absolute;
        bottom: 0;
        right: 0;
    }    
    dynamic-repeater-body > dynamic-repeater-item > div section.bottom > a {
        color: black; 
    }
    dynamic-repeater-body > dynamic-repeater-item > div section.bottom > a:hover {
        cursor: pointer;
    }
    dynamic-repeater-item {
      -webkit-transform: rotate(-2deg);
      -o-transform: rotate(-2deg);
      -moz-transform: rotate(-2deg);
    }
    dynamic-repeater-body dynamic-repeater-item:nth-child(even) {
      -o-transform: rotate(4deg);
      -webkit-transform: rotate(4deg);
      -moz-transform: rotate(4deg);    
    }
    dynamic-repeater-body dynamic-repeater-item:nth-child(3n) {
      -o-transform: rotate(-3deg);
      -webkit-transform: rotate(-3deg);
      -moz-transform: rotate(-3deg);     
    }
    dynamic-repeater-body dynamic-repeater-item:nth-child(5n) {
      -o-transform: rotate(5deg);
      -webkit-transform: rotate(5deg);
      -moz-transform: rotate(5deg);     
    }    
    dynamic-repeater-body dynamic-repeater-item:hover,
    dynamic-repeater-body dynamic-repeater-item:focus {     
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.1);
      -o-transform: scale(1.1);           
    }
  `]
})
export class DynamicRepeaterComponent {
  // DynamicRepeaterComponent holds the items
  // to render in our repeater.
  // NOTE: Injected `property`.
  items: any[];

  // TemplateRef used to render each item.
  // NOTE: Injected `query`.
  itemTemplateRef: TemplateRef<any>;

  constructor() {
    this.items = [];
    this.itemTemplateRef = null;
  }

}