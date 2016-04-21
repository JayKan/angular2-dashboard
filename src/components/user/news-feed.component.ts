import { Component, ViewEncapsulation } from 'angular2/core';

@Component({
  selector: 'news-feed-widget',
  template:`
  <div id="news-feed">
    <div class="feed-header">NEWS FEEDS</div>
    <div class="feed-content">
      <ul class="feed">
        <li>
          <a>Conference on the sales results for the previous year</a> <span class="feed-date">25/4/2015</span>
        </li>
        <li>
          <a>Jay's birthday at San Pedro Square at 7:00pm.</a> <span class="feed-date">25/4/2015</span>
        </li>
        <li>
          <a>Kobe bryant commented on your post.</a> <span class="feed-date">25/4/2015</span>
        </li>
        <li>
          <a>Password Alert: Need to upgrade your password.</a> <span class="feed-date">25/4/2015</span>
        </li>
      </ul>
    </div>
  </div>
  `,
  encapsulation: ViewEncapsulation.None,
  styles: [`
#news-feed .feed-header {
    text-transform: uppercase;
    margin-left: -12px;
    margin-right: -12px;
    height: 32px; 
    padding: 8px 0 12px 12px;
    font-size: 12px;
    margin-top: 10px;
    font-weight: 500;
    background: #1a252f;
}

#news-feed .feed-content {
    margin-top: 4px;
}

#news-feed .feed-content ul.feed {
    list-style-type: none;
    padding: 0;
}

#news-feed .feed-content ul.feed li {
    height: 40px;
    padding-top: 4px;
    font-size: 10.5px;
}

#news-feed .feed-content ul.feed li .feed-date {
    float: right;
    font-size: 9px;
    padding-right: 5px;
    color: #eee;
}

#news-feed .feed-content ul.feed li a {
    color: inherit;
}

#news-feed .feed-content ul.feed li a:hover, 
#news-feed .feed-content ul.feed li a:focus {
    color: white;
    text-decoration: none;
}
  `]
})
export class NewsFeedWidget {
  
}