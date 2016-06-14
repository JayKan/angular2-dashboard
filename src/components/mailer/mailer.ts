import {
  Component,
  ViewEncapsulation,
  OnInit
} from '@angular/core';

@Component({
  selector: 'mailer-widget',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'components/mailer/mailer.template.html',
  styleUrls: ['components/mailer/mailer.style.css']
})
export class MailerWidget implements OnInit {
  selectedEmail;
  emails = [
    {
      subject: 'Angular 2 NgConf Keynote',
      date: '23rd May',
      sender: 'Brad Green',
      body: `
      Hey team,
      
      I'm thinking we can get Angular2 RC ready for NgConf right?
      
      What do you think?
      
      Cheers,
      Brad Green
      The boss of the Father of AngularJS 
      `
    },
    {
      subject: 'Angular 2 Release Date',
      date: '7th Jan',
      sender: 'Brad Green',
      body: `
      Hey team,
      
      I'm thinking we can ship Angular 2 in anywhere between 
      2 days and 2 years.
      
      What do you think?
      
      Cheers,
      Brad Green
      The boss of the Father of AngularJS      
      `
    },
    {
      subject: 'Invite: Angular 3 Planning Meeting',
      date: '6th Jan',
      sender: 'Papa Misko',
      body: `
      Hey team,
      
      I'm really excited for Angular 2, but I think it's time to 
      start thinking about Angular 3.
      
      I'm thinking we kill off Components and switch from TypeScript to 
      CoffeeScript.
      
      Let me know what you think.
      
      Misko Hevery a.k.a. Papa Misko      
      `
    },
    {
      subject: 'Delete all the tests?',
      date: '6th Jan',
      sender: 'David East',
      body: `
      Hey ngFolks,
      
      Testing is really hard, so I'm just going to delete all the 
      .spec.ts files.
      
      Sound good? Great!      
      
       Let me know what you think.
      
      David East
      Firebase all the things
      `
    },
    {
      subject: 'Router vs Router',
      date: '6th Jan',
      sender: 'Pete Bacon Darwin',
      body: `
      Hey everyone,
      
      Just a friendly reminder that the term is router, not router.
      
      Hope that clears everything up.
      
      Cheers,
      Pete Bacon-Router Darwin
      `
    },
    {
      subject: 'Invitation: Your Deep Brain Stimulation Appointment',
      date: '6th Jan',
      sender: 'Dr Andres Lozano',
      body: `
      Hey Matias,
      
      We have you scheduled for this upcoming Friday at 9am.
      
      Remember to bring your tin-foil.
      
      Cheers,
      Dr. Andres Lozano
      `
    },
    {
      subject: 'Test Email #1',
      date: '20th Feb',
      sender: 'Peter Drury',
      body: [`
      Dear Peter, 
      
      Good Day! Lorem ipsum dolor sit amet!
      
      I'm really excited for Angular 2, but I think it's time to 
      start thinking about Angular 3.
      
      I'm thinking we kill off Components and switch from TypeScript 
      to CoffeeScript.
      
      Let me know what you think.
      
      Peter Drury
      `]
    }
  ];
  constructor() {}
  
  ngOnInit(): void {
    this.selectedEmail = this.emails[0];
  }
}