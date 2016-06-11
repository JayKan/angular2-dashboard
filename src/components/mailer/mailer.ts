import {Component, ViewEncapsulation} from '@angular/core';

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
                    <li class="messages-item">
                      <a href="#">
                        <div class="leftist"><i class="fa fa-star"></i>	
                          <label class="checkbox1" for="Option45">
                            <input id="Option45" type="checkbox" class="">
                            <span></span>
                          </label>
                        </div>
                        <span class="messages-item-subject"> Nicole Bell</span>
                        <span class="date-class text-muted pull-right"><i class="fa fa-paperclip"></i>&nbsp;7th Jan</span>
                        <span class="messages-item-content"><p>Hi Peter, Thanks for the e-mail. Lorem ipsum dolor sit amet,</p></span>
                      </a>
                    </li>
                    <li class="messages-item">
                      <div class="leftist"><i class="fa fa-star"></i>	
                        <label class="checkbox1" for="Option55">
                          <input id="Option55" type="checkbox" class="">
                          <span></span>
                        </label>
                      </div>		
                      <span class="messages-item-subject"> John Doe </span>
                      <span class="date-class text-muted pull-right"><i class="fa fa-paperclip"></i>&nbsp;4th Jan</span>
                      <span class="messages-item-content"><p>Dear Mr. Clarks I am interested in Lorem ipsum dolor sit amet,</p></span>
                    </li>
                    <li class="messages-item active-message">
                      <div class="leftist"><i class="fa fa-star"></i>	
                        <label class="checkbox1" for="Option65">
                          <input id="Option65" type="checkbox" class="">
                          <span></span>
                        </label>
                      </div>		
                      <span class="messages-item-subject"> Jane Doe </span>
                      <span class="date-class text-muted pull-right">&nbsp;1st Jan</span>
                      <span class="messages-item-content"><p>Dear Mr. Clarks In response Lorem ipsum dolor sit amet,</p></span>
                    </li>
                    <li class="messages-item">
                      <div class="leftist"><i class="fa fa-star fa-starred"></i>	
                        <label class="checkbox1" for="Option42">
                          <input id="Option42" type="checkbox" class="">
                          <span></span>
                        </label>
                      </div>		
                      <span class="messages-item-subject">  Peter Drury </span>
                      <span class="date-class text-muted pull-right">&nbsp;29th Dec</span>
                      <span class="messages-item-content"><p>Dear Mr. Clarks, As we discussed Lorem ipsum dolor sit amet,</p></span>
                    </li>
                    <li class="messages-item">
                      <div class="leftist"><i class="fa fa-star"></i>	
                        <label class="checkbox1" for="Option32">
                          <input id="Option32" type="checkbox" class="">
                          <span></span>
                        </label>
                      </div>		
                      <span class="messages-item-subject"> John Smith </span>
                      <span class="date-class text-muted pull-right"><i class="fa fa-paperclip"></i>&nbsp;26th Dec</span>
                      <span class="messages-item-content"><p>Dear Peter, Good Day! Lorem ipsum dolor sit amet,</p></span>
                    </li>
                    <li class="messages-item">
                      <div class="leftist"><i class="fa fa-star"></i>	
                        <label class="checkbox1" for="Option92">
                          <input id="Option92" type="checkbox" class="">
                          <span></span>
                        </label>
                      </div>		
                      <span class="messages-item-subject">Congratulations </span>
                      <span class="date-class text-muted pull-right">&nbsp;7th jan</span>
                      <span class="messages-item-content"><p>Dear friend Peter Lorem ipsum dolor sit amet,</p></span>
                    </li>
                    <li class="messages-item">
                      <div class="leftist"><i class="fa fa-star"></i>	
                        <label class="checkbox1" for="Option30">
                          <input id="Option30" type="checkbox" class="">
                          <span></span>
                        </label>
                      </div>		
                      <span class="messages-item-subject"> Sincere request to keep in touch.</span>
                      <span class="date-class text-muted pull-right"><i class="fa fa-paperclip"></i>&nbsp;7th jan</span>
                      <span class="messages-item-content"><p>Dear Mr. Clarks,I was shocked Lorem ipsum dolor sit amet,</p></span>
                    </li>
                    <li class="messages-item">
                      <a href="#">
                        <div class="leftist"><i class="fa fa-star"></i>	
                          <label class="checkbox1" for="Option45">
                            <input id="Option45" type="checkbox" class="">
                            <span></span>
                          </label>
                        </div>
                        <span class="messages-item-subject"> Nicole Bell</span>
                        <span class="date-class text-muted pull-right"><i class="fa fa-paperclip"></i>&nbsp;7th Jan</span>
                        <span class="messages-item-content"><p>Hi Peter, Thanks for the e-mail. Lorem ipsum dolor sit amet,</p></span>
                      </a>
                    </li>
                    <li class="messages-item">
                      <div class="leftist"><i class="fa fa-star"></i>	
                        <label class="checkbox1" for="Option55">
                          <input id="Option55" type="checkbox" class="">
                          <span></span>
                        </label>
                      </div>		
                      <span class="messages-item-subject"> John Doe </span>
                      <span class="date-class text-muted pull-right"><i class="fa fa-paperclip"></i>&nbsp;4th Jan</span>
                      <span class="messages-item-content"><p>Dear Mr. Clarks I am interested in Lorem ipsum dolor sit amet,</p></span>
                    </li>
                    <li class="messages-item">
                      <div class="leftist"><i class="fa fa-star"></i>	
                        <label class="checkbox1" for="Option65">
                          <input id="Option65" type="checkbox" class="">
                          <span></span>
                        </label>
                      </div>		
                      <span class="messages-item-subject"> Jane Doe </span>
                      <span class="date-class text-muted pull-right">&nbsp;1st Jan</span>
                      <span class="messages-item-content"><p>Dear Mr. Clarks In response Lorem ipsum dolor sit amet,</p></span>
                    </li>
                    <li class="messages-item">
                      <div class="leftist"><i class="fa fa-star fa-starred"></i>	
                        <label class="checkbox1" for="Option42">
                          <input id="Option42" type="checkbox" class="">
                          <span></span>
                        </label>
                      </div>		
                      <span class="messages-item-subject">  Peter Drury </span>
                      <span class="date-class text-muted pull-right">&nbsp;29th Dec</span>
                      <span class="messages-item-content"><p>Dear Mr. Clarks, As we discussed Lorem ipsum dolor sit amet,</p></span>
                    </li>
                    <li class="messages-item">
                      <div class="leftist"><i class="fa fa-star"></i>	
                        <label class="checkbox1" for="Option32">
                          <input id="Option32" type="checkbox" class="">
                          <span></span>
                        </label>
                      </div>		
                      <span class="messages-item-subject"> John Smith </span>
                      <span class="date-class text-muted pull-right"><i class="fa fa-paperclip"></i>&nbsp;26th Dec</span>
                      <span class="messages-item-content"><p>Dear Peter, Good Day! Lorem ipsum dolor sit amet,</p></span>
                    </li>
                    <li class="messages-item">
                      <div class="leftist"><i class="fa fa-star"></i>	
                        <label class="checkbox1" for="Option92">
                          <input id="Option92" type="checkbox" class="">
                          <span></span>
                        </label>
                      </div>		
                      <span class="messages-item-subject">Congratulations </span>
                      <span class="date-class text-muted pull-right">&nbsp;7th jan</span>
                      <span class="messages-item-content"><p>Dear friend Peter Lorem ipsum dolor sit amet,</p></span>
                    </li>
                    <li class="messages-item">
                      <div class="leftist"><i class="fa fa-star"></i>	
                        <label class="checkbox1" for="Option30">
                          <input id="Option30" type="checkbox" class="">
                          <span></span>
                        </label>
                      </div>		
                      <span class="messages-item-subject"> Sincere request to keep in touch.</span>
                      <span class="date-class text-muted pull-right"><i class="fa fa-paperclip"></i>&nbsp;7th jan</span>
                      <span class="messages-item-content"><p>Dear Mr. Clarks,I was shocked Lorem ipsum dolor sit amet,</p></span>
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
          <div class="wrap-message">	
            <section>
              <div class="message-topic">
                <i class="fa fa-star m-r-xs text-primary"></i> Development Files <span class="pull-right text-muted"><a href=""><i class="fa fa-reply"></i></a><a href=""><i class="fa fa-trash-o"></i></a></span>
              </div>
              <div class="message-sender">
                <img class="img-circle sender-img m-r-xs" src="assets/images/profile-icon.png"> 
                <a href="#">Kumar Sanket</a> to <a href="#">me</a> &nbsp;<i class="fa fa-caret-square-o-down"></i>
                <small class="pull-right m-t-sm">
                  <i class="fa fa-paperclip"></i> &nbsp;<a href="javascript:;">(2)</a> &nbsp;&nbsp; Today 7:30 AM
                </small>
              </div>
            </section>
            
            <div class="message-content">
              <p>Hi Peter,</p>
              <p>Thanks for the e-mail. It is always nice to hear from people, especially from you, Scott.</p>
              <p>I have not got any reply, a positive or negative one, from Seibido yet.<br>Let's wait and hope that it will make a BOOK.</p>
              <p>Have you finished your paperwork for Kaken and writing academic articles?<br>If you have some free time in the near future, I want to meet you and explain to you our next project.</p> 
              <p>Why not drink out in Hiroshima if we are accepted?<br>We need to celebrate ourselves, don't we?<br>Let's have a small end-of-the-year party!</p> <p>Sincerely, K. Nakagawa</p>
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
export class MailerWidget {
  constructor() {}
}