import { Component } from '@angular/core';
import { MailerWidget } from '../../components/mailer/mailer';

@Component({
  selector: 'mail',
  directives: [ MailerWidget ],
  template: `
  <h4>Dashboard@Mail</h4>
  <div class="animate">
    <mailer-widget></mailer-widget>
  </div>
  `
})
export class MailView {
  
}