import { Component, ViewEncapsulation } from '@angular/core';
import { DynamicRepeaterComponent } from '../../components/dynamic-repeater/dynamic-repeater';

export interface IBoard {
  date: string;
  title: string;
  content: string;
}

@Component({
  selector: 'ui-widgets-view',
  encapsulation: ViewEncapsulation.None,
  directives: [ DynamicRepeaterComponent ],
  // In this view, we're passing a dynamic TemplateRef to the DynamicRepeater
  // component. We're not passing it in like a property; rather, we're "tagging" it
  // with the "#itemRenderer" handle. Then, the DynamicRepeater is going to query its
  // content (via ContentChild) for the template reference. When this TemplateRef is
  // "stamped out", it will make several local view variables available:
  // --
  // * index
  // * item
  // --
  // Here, you can see that the template is hooking into those variables using the
  // "let" syntax, ex. "let-color=item".
  template: `
  <h4>Dashboard@Widgets</h4>
  <dynamic-repeater [items]="boards">    
    <template #itemRenderer let-item="item" let-index="index">      
      <div title="Item {{ index }}">
        <section><small>{{ item.date }}</small></section>       
        <h4>{{ item.title }}</h4>
        <p>{{ item.content }}</p>
        <section class="bottom"><a><i class="fa fa-trash-o"></i></a></section>       
      </div>
    </template>
  </dynamic-repeater>  
  `
})
export class WidgetsView {
  boards: IBoard[];
  isShowingWidget: boolean = false;
  constructor() {
    this.boards = [
      { date: '12:03:28 12-04-2014', title: 'Long established fact', content: 'The years, sometimes by accident, sometimes on purpose (injected humour and the like).' },
      { date: '11:08:33 16-04-2014', title: 'Latin professor at Hampden-Sydney ', content: 'The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.' },
      { date: '9:12:28 10-04-2014', title: 'The standard chunk of Lorem', content: 'Ipsum used since the 1500s is reproduced below for those interested.' },
      { date: '3:33:12 6-03-2014', title: 'The generated Lorem Ipsum ', content: 'The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.' },
      { date: '5:20:11 4-04-2014', title: 'Contrary to popular belief', content: 'Hampden-Sydney College in Virginia, looked up one.' },
      { date: '2:10:12 4-05-2014', title: 'There are many variations', content: 'All the Lorem Ipsum generators on the Internet .' }
    ]
  }
  
  toggle(): void {
    this.isShowingWidget = !this.isShowingWidget;
  }
}