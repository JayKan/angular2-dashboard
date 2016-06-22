import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'timeline-widget',
  encapsulation: ViewEncapsulation.None,
  template: `   
    <h4>Dashboard@Timeline</h4>
    <div class="row animated fadeInRight">
      <div class="col-lg-12">
                   
        <section class="timeline-content">
          <div id="vertical-timeline" class="vertical-container dark-timeline center-orientation">
            <div class="vertical-timeline-block">
              <div class="vertical-timeline-icon navy">
                <i class="fa fa-briefcase"></i>
              </div>
              <div class="vertical-timeline-content">
                <h2>Meeting</h2>
                <p>Conference on the sales results for the previous year. Monica please examine sales trends in
                  marketing and products. Below please find the current status of the sale.
                </p>
                <a class="btn btn-sm btn-navy">More info</a>
                <span class="vertical-date">Today <br/><small>Dec 24</small></span>
              </div>
            </div>
            <div class="vertical-timeline-block">
              <div class="vertical-timeline-icon blue">
                <i class="fa fa-file-text"></i>
              </div>

              <div class="vertical-timeline-content">
                <h2>Send documents to Mike</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since.</p>
                <a class="btn btn-sm btn-blue">Download document</a>
                <span class="vertical-date">Today <br/><small>Dec 24</small></span>
              </div>
            </div>

            <div class="vertical-timeline-block">
              <div class="vertical-timeline-icon default">
                <i class="fa fa-coffee"></i>
              </div>

              <div class="vertical-timeline-content">
                <h2>Coffee Break</h2>
                <p>Go to shop and find some products. Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's. </p>
                <a class="btn btn-sm btn-info">Read more</a>
                <span class="vertical-date"> Yesterday <br/><small>Dec 23</small></span>
              </div>
            </div>

            <div class="vertical-timeline-block">
              <div class="vertical-timeline-icon yellow">
                <i class="fa fa-phone"></i>
              </div>

              <div class="vertical-timeline-content">
                <h2>Phone with Jeronimo</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum
                  aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus
                  veritatis qui ut.</p>
                  <a class="btn btn-sm btn-warning">Read more</a>
                <span class="vertical-date">Yesterday <br/><small>Dec 23</small></span>
              </div>
            </div>

            <div class="vertical-timeline-block">
              <div class="vertical-timeline-icon danger">
                <i class="fa fa-user-md"></i>
              </div>

              <div class="vertical-timeline-content">
                <h2>Go to the doctor dr Smith</h2>
                <p>Find some issue and go to doctor. Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                  1500s. </p>
                  <a class="btn btn-sm btn-danger">Read More</a>
                <span class="vertical-date">Yesterday <br/><small>Dec 23</small></span>
              </div>
            </div>

            <div class="vertical-timeline-block">
              <div class="vertical-timeline-icon navy">
                <i class="fa fa-comments"></i>
              </div>

              <div class="vertical-timeline-content">
                <h2>Chat with Monica and Sandra</h2>
                <p>Web sites still in their infancy. Various versions have evolved over the years, sometimes by
                  accident, sometimes on purpose (injected humour and the like). </p>
                  <a class="btn btn-sm btn-navy">More</a>
                <span class="vertical-date">Yesterday <br/><small>Dec 23</small></span>
              </div>
            </div>
          </div>
        </section>        
      </div>
    </div>
  `,
  styles: [`
.padding-25 {
    padding: 25px;
}
.navy,
.btn-navy {
    background-color: #1ab394;
    color: #ffffff;
}

.blue,
.btn-blue {
    background-color: #1c84c6;
    color: #ffffff;
}
.default {
    background-color: #23c6c8;
    color: #ffffff;
}
.danger {
    background-color: #d9534f;
    color: #ffffff;
}
.yellow {
    background-color: #f8ac59;
    color: #ffffff;
}
.timeline-content {
    background-color: #ffffff;
    color: inherit;
    padding: 15px 20px 20px 20px;
    border-color: #e7eaec;
    border-image: none;
    border-style: solid solid none;
    border-width: 1px 0;
    clear: both;
}

.timeline-content .vertical-container {
  /* this class is used to give a max-width to the element it is applied to, and center it horizontally when it reaches that max-width */
  width: 90%;
  max-width: 1170px;
  margin: 0 auto;
}
.timeline-content .vertical-container::after {
  /* clearfix */
  content: '';
  display: table;
  clear: both;
}

.timeline-content #vertical-timeline {
  position: relative;
  padding: 0;
  margin-top: 20px;
  margin-bottom: 20px;
}
.timeline-content #vertical-timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 18px;
  height: 100%;
  width: 4px;
  background: #f1f1f1;
}
.timeline-content .vertical-timeline-content .btn {
  float: right;
}
.timeline-content #vertical-timeline.light-timeline:before {
  background: #e7eaec;
}
.timeline-content .dark-timeline .vertical-timeline-content:before {
  border-color: transparent #f5f5f5 transparent transparent ;
}
.timeline-content .dark-timeline.center-orientation .vertical-timeline-content:before {
  border-color: transparent  transparent transparent #f5f5f5;
}
.timeline-content .dark-timeline .vertical-timeline-block:nth-child(2n) .vertical-timeline-content:before,
.timeline-content .dark-timeline.center-orientation .vertical-timeline-block:nth-child(2n) .vertical-timeline-content:before {
  border-color: transparent #f5f5f5 transparent transparent;
}
.timeline-content .dark-timeline .vertical-timeline-content,
.timeline-content .dark-timeline.center-orientation .vertical-timeline-content {
  background: #f5f5f5;
}
@media only screen and (min-width: 1170px) {
  .timeline-content #vertical-timeline.center-orientation {
    margin-top: 3em;
    margin-bottom: 3em;
  }
  .timeline-content #vertical-timeline.center-orientation:before {
    left: 50%;
    margin-left: -2px;
  }
}
@media only screen and (max-width: 1170px) {
  .timeline-content .center-orientation.dark-timeline .vertical-timeline-content:before {
    border-color: transparent #f5f5f5 transparent transparent;
  }
}
.timeline-content .vertical-timeline-block {
  position: relative;
  margin: 2em 0;
}
.timeline-content .vertical-timeline-block:after {
  content: "";
  display: table;
  clear: both;
}
.timeline-content .vertical-timeline-block:first-child {
  margin-top: 0;
}
.timeline-content .vertical-timeline-block:last-child {
  margin-bottom: 0;
}
@media only screen and (min-width: 1170px) {
  .timeline-content .center-orientation .vertical-timeline-block {
    margin: 4em 0;
  }
  .timeline-content .center-orientation .vertical-timeline-block:first-child {
    margin-top: 0;
  }
  .timeline-content .center-orientation .vertical-timeline-block:last-child {
    margin-bottom: 0;
  }
}
.timeline-content .vertical-timeline-icon {
  position: absolute;
  padding-top: 3px;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 16px;
  border: 3px solid #f1f1f1;
  text-align: center;
}
.timeline-content .vertical-timeline-icon i {
  display: block;
  width: 24px;
  height: 24px;
  position: relative;
  left: 50%;
  top: 50%;
  margin-left: -12px;
  margin-top: -9px;
}
@media only screen and (min-width: 1170px) {
  .timeline-content .center-orientation .vertical-timeline-icon {
    width: 50px;
    height: 50px;
    left: 50%;
    margin-left: -25px;
    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;
    font-size: 19px;
  }
  .timeline-content .center-orientation .vertical-timeline-icon i {
    margin-left: -12px;
    margin-top: -10px;
  }
  .timeline-content .center-orientation .cssanimations .vertical-timeline-icon.is-hidden {
    visibility: hidden;
  }
}
.timeline-content .vertical-timeline-content {
  position: relative;
  margin-left: 60px;
  background: white;
  border-radius: 0.25em;
  padding: 1em;
}
.timeline-content .vertical-timeline-content:after {
  content: "";
  display: table;
  clear: both;
}
.timeline-content .vertical-timeline-content h2 {
  font-weight: 400;
  margin-top: 4px;
  font-size: 18px;
}
.timeline-content .vertical-timeline-content p {
  margin: 1em 0;
  line-height: 1.6;
}
.timeline-content .vertical-timeline-content .vertical-date {
  float: left;
  font-weight: 500;
}
.timeline-content .vertical-date small {
  color: #1ab394;
  font-weight: 500;
  padding-right: 4px;
}
.timeline-content .vertical-timeline-content::before {
  content: '';
  position: absolute;
  top: 16px;
  right: 100%;
  height: 0;
  width: 0;
  border: 7px solid transparent;
  border-right: 7px solid white;
}
@media only screen and (min-width: 768px) {
  .timeline-content .vertical-timeline-content h2 {
    font-size: 18px;
  }
  .timeline-content .vertical-timeline-content p {
    font-size: 13px;
  }
}
@media only screen and (min-width: 1170px) {
  .timeline-content .center-orientation .vertical-timeline-content {
    margin-left: 0;
    padding: 1.6em;
    width: 45%;
  }
  .timeline-content .center-orientation .vertical-timeline-content::before {
    top: 24px;
    left: 100%;
    border-color: transparent;
    border-left-color: white;
  }
  .timeline-content .center-orientation .vertical-timeline-content .btn {
    float: left;
  }
  .timeline-content .center-orientation .vertical-timeline-content .vertical-date {
    position: absolute;
    width: 100%;
    left: 122%;
    top: 2px;
    font-size: 14px;
  }
  .timeline-content .center-orientation .vertical-timeline-block:nth-child(even) .vertical-timeline-content {
    float: right;
  }
  .timeline-content .center-orientation .vertical-timeline-block:nth-child(even) .vertical-timeline-content::before {
    top: 24px;
    left: auto;
    right: 100%;
    border-color: transparent;
    border-right-color: white;
  }
  .timeline-content .center-orientation .vertical-timeline-block:nth-child(even) .vertical-timeline-content .btn {
    float: right;
  }
  .timeline-content .center-orientation .vertical-timeline-block:nth-child(even) .vertical-timeline-content .vertical-date {
    left: auto;
    right: 122%;
    text-align: right;
  }
  .timeline-content .center-orientation .cssanimations .vertical-timeline-content.is-hidden {
    visibility: hidden;
  }
}    
  `],
})
export class TimelineWidget {

}