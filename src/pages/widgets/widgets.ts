import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { DynamicRepeaterComponent } from '../../components/dynamic-repeater/dynamic-repeater';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { OVERLAY_PROVIDERS } from '../../components/core/overlay/overlay';
import { DIALOG_DIRECTIVES } from '../../components/dialog/index';

export interface IBoard {
  date: string;
  title: string;
  content: string;
}
@Component({
  selector: 'ui-widgets-view',
  encapsulation: ViewEncapsulation.None,
  directives: [DynamicRepeaterComponent],
  providers: [OVERLAY_PROVIDERS],
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
  templateUrl: 'pages/widgets/widgets.template.html'
})
export class WidgetsView implements OnInit {
  boards: IBoard[];
  isShowingWidget: boolean = false;
  constructor(private _http: Http) {
    this.boards = [
      { date: '12:03:28 12-04-2014', title: 'Long established fact', content: 'The years, sometimes by accident, sometimes on purpose (injected humour and the like).' },
      { date: '11:08:33 16-04-2014', title: 'Latin professor at Hampden-Sydney ', content: 'The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.' },
      { date: '9:12:28 10-04-2014', title: 'The standard chunk of Lorem', content: 'Ipsum used since the 1500s is reproduced below for those interested.' },
      { date: '3:33:12 6-03-2014', title: 'The generated Lorem Ipsum ', content: 'The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.' },
      { date: '5:20:11 4-04-2014', title: 'Contrary to popular belief', content: 'Hampden-Sydney College in Virginia, looked up one.' },
      { date: '2:10:12 4-05-2014', title: 'There are many variations', content: 'All the Lorem Ipsum generators on the Internet .' }
    ]
  }

  ngOnInit(): void {
    // this._http
    //   .get('https://powerful-spire-40053.herokuapp.com/check?url=http://kylefalconercodes.com')
    //   .map(res => res.json())
    //   .subscribe(
    //     data => console.log('Yay got data: ', data),
    //     error => console.log('Error: ', error),
    //     () => console.log('Finally done!')
    //   )
  }

  toggle(): void {
    this.isShowingWidget = !this.isShowingWidget;
  }
  status: string = '';

  confirmClose(forgiveDebt: boolean) {
    if (forgiveDebt) {
      this.status = 'You decided to get rid of your debt.';
    } else {
      this.status = 'You decided to keep your debt.';
    }
  }

  customClose(interesting: boolean) {
    if (interesting) {
      this.status = 'That article was interesting.';
    } else {
      this.status = 'Look for something else.';
    }
  }
}