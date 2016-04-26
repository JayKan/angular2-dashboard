import { Component, OnInit } from 'angular2/core';

@Component({
  selector: 'tables',
  template:`
  <h4>Dashboard@Tables</h4>
  <div class="animate">
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header card-primary card-inverse">
            <span class="card-title">Regular Table</span>
          </div>
          <div class="card-block">
            <table class="table">
              <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John</td>
                  <td>john@gmail.com</td>
                  <td>London, UK</td>
                </tr>
                <tr>
                  <td>Andy</td>
                  <td>andygmail.com</td>
                  <td>Merseyside, UK</td>
                </tr>
                <tr>
                  <td>Frank</td>
                  <td>frank@gmail.com</td>
                  <td>Southampton, UK</td>
                </tr>
              </tbody>
            </table>            
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
  styles: [`
  
  `]
})
export class TablesView implements OnInit {

  constructor(){}

  ngOnInit(): void {
  }
}