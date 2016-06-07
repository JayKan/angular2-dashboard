import { Component, ViewEncapsulation } from 'angular2/core';

@Component({
  selector: 'news-feed-widget',
  templateUrl: 'components/user/news-feed.template.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['components/user/news-feed.style.css']
})
export class NewsFeedWidget {}