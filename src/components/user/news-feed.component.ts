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
  stylesUrls: ['components/user/news-feed.style.css']
})
export class NewsFeedWidget {}