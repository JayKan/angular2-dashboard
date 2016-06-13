import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'mailer-widget',
  encapsulation: ViewEncapsulation.None,
  template: `
  <div class="mailer-container">   
    
    <div class="row">
      <div class="col-lg-6 col-sm-12">
        <div class="row" style="margin-left:0; margin-right:0;">
          <div class="col-md-4 col-sm-4 inbox-container" style="padding:0;">
            <div>
              <div class="col email-options ps-container">                        
                <div class="button-container">
                  <a href="javascript:void(0)" class="compose-btn">Compose</a>
                </div>              
                <ul class="main-options">
                  <li class="activeli">
                    <a href="javascript:void(0)">
                      <span class="title"> &nbsp; Inbox</span>
                      <span class="label label-pill label-primary label-middle pull-right">10</span>
                    </a>	
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <span class="title"> &nbsp; Junk Mail</span>
                    </a>	
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <span class="title"> &nbsp; Drafts</span>
                      <span class="label label-pill label-danger label-middle pull-right">16</span>
                    </a>	
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <span class="title"> &nbsp; Sent</span>
                    </a>	
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <span class="title"> &nbsp; Trash</span>
                    </a>	
                  </li>
                  <hr class="poor">
                  <h5>LABELS</h5>
                  <li>
                    <a href="javascript:void(0)">
                      <span class="title"> &nbsp; Clients <i class="fa fa-stop pull-right faorange"></i></span>
                    </a>	
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <span class="title"> &nbsp; Social <i class="fa fa-stop pull-right fayellow"></i></span>
                    </a>	
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <span class="title"> &nbsp; Family <i class="fa fa-stop pull-right facyan"></i></span>
                    </a>	
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <span class="title"> &nbsp; Friends <i class="fa fa-stop pull-right fapurple"></i></span>
                    </a>	
                  </li>
                </ul>                    
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-4 messages-container" style="padding: 107px 0 0 0;">
              <div>
                <div class="searchbox">
                  <span class="sebox">Inbox</span> (14 unread) <i class="fa fa-envelope-o"></i>
                  <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Search Inbox...">
              </div>
          
              <div class="wrap-list">
                <div class="messages-list">
                  <ul>
                    <li class="messages-item"
                        *ngFor="let email of emails"
                        [class.active-message]="email === selectedEmail"
                        (click)="selectedEmail = email"
                    >                               
                      <a>
                        <div class="leftist"><i class="fa fa-star"></i>	
                          <label class="checkbox1" for="Option45">
                            <input id="Option45" type="checkbox">
                            <span></span>
                          </label>
                        </div>
                        <span class="messages-item-subject">{{ email.sender }}</span>
                        <span class="date-class text-muted pull-right"><i class="fa fa-paperclip"></i>&nbsp;{{ email.date }}</span>
                        <span class="messages-item-content">
                          <p>{{ email.subject }}</p>
                        </span>
                      </a>
                    </li>                  
                  </ul>
                </div>	
              </div>	          
            </div>
          </div>
        </div>         
      </div>           
                                                                               
      <div class="col-lg-6 col-sm-12 email-detail">
        <div class="text-wrapper">
          <div class="wrap-message"
               *ngIf="selectedEmail"
          >	
            <section>
              <div class="message-topic">
                <i class="fa fa-star m-r-xs text-primary"></i>
                {{ selectedEmail.subject }}
                <span class="pull-right text-muted">
                  <a><i class="fa fa-reply"></i></a>
                  <a><i class="fa fa-trash-o"></i></a>
                </span>
              </div>
              <div class="message-sender">
                <img class="img-circle sender-img m-r-xs" src="assets/images/profile-icon.png"> 
                <a>{{ selectedEmail.sender }}</a> to 
                <a>me</a> &nbsp;<i class="fa fa-caret-square-o-down"></i>
                <small class="pull-right m-t-sm">
                  <i class="fa fa-paperclip"></i> &nbsp;<a href="javascript:;">(2)</a> &nbsp;&nbsp; Today 7:30 AM
                </small>
              </div>
            </section>
                       
                       
            <div class="message-content">            
              <pre class="content">
                {{ selectedEmail.body }}
              </pre>
            </div>
            
            <div class="message-footer">
              <button type="button" class="btn btn-primary btn-rounded pull-right"><i class="fa fa-reply"></i> Reply</button>
            </div>
          </div>
		    </div>
      </div>
    </div>    
  </div>
  `,
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
      
      I'm really excited for Angular 2, but I think it's time to start thinking about Angular 3.
      
      I'm thinking we kill off Components and switch from TypeScript to CoffeeScript.
      
      Let me know what you think.
      
      Peter Drury
      `]
    }
  ];
  constructor() {
    this.selectedEmail = this.emails[0];
  }
  
  ngOnInit(): void {
    
  }
}