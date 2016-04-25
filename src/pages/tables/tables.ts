import { Component, OnInit } from 'angular2/core';

@Component({
  selector: 'tables',
  template:`
  <h4>Dashboard@Tables</h4>
  <div class="animate">
    <h3>Tables Content</h3>
  </div>
  `
})
export class TablesView implements OnInit {

  constructor(){}

  ngOnInit(): void {
  }
}