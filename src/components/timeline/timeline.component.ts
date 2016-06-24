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
  styleUrls: ['components/timeline/timeline.style.css'],
})
export class TimelineWidget {

}