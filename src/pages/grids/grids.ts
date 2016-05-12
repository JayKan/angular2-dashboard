import { Component, ViewEncapsulation } from 'angular2/core';

@Component({
  selector: 'grids',
  encapsulation: ViewEncapsulation.None,
  template: `
  <div class="animate">
    <div class="row">
      <div class="col-sm-12">
        <div class="grid">
          <div class="grid-block">
              <div class="center"><h6>Twelve</h6></div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
          <div class="grid">
              <div class="grid-block">
                  <div class="center"><h6>Six</h6></div>
              </div>
          </div>
      </div>

      <div class="col-sm-6">
        <div class="grid">
          <div class="grid-block">
              <div class="center"><h6>Six</h6></div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
        <div class="col-sm-4">
            <div class="grid">
                <div class="grid-block">
                    <div class="center"><h6>Four</h6></div>
                </div>
            </div>
        </div>

        <div class="col-sm-4">
            <div class="grid">
                <div class="grid-block">
                    <div class="center"><h6>Four</h6></div>
                </div>
            </div>
        </div>

        <div class="col-sm-4">
            <div class="grid">

                <div class="grid-block">
                    <div class="center"><h6>Four</h6></div>
                </div>
            </div>

        </div>
    </div>
    <div class="row">
        <div class="col-sm-3">
            <div class="grid">
                <div class="grid-block">
                    <div class="center"><h6>Three</h6></div>
                </div>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="grid">
                <div class="grid-block">
                    <div class="center"><h6>Three</h6></div>
                </div>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="grid">
                <div class="grid-block">
                  <div class="center"><h6>Three</h6></div>
                </div>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="grid">
                <div class="grid-block">
                    <div class="center"><h6>Three</h6></div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-5">
            <div class="grid">
                <div class="grid-block">
                    <div class="center"><h6>Five</h6></div>
                </div>
            </div>
        </div>
        <div class="col-sm-7">
            <div class="grid">
                <div class="grid-block">
                    <div class="center"><h6>Seven</h6></div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-4">
            <div class="grid">
                <div class="grid-block">
                    <div class="center"><h6>Four</h6></div>
                </div>
            </div>
        </div>
        <div class="col-sm-8">
            <div class="grid">
                <div class="grid-block">
                    <div class="center"><h6>Eight</h6></div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-3">
            <div class="grid">
                <div class="grid-block">
                    <div class="center"><h6>Three</h6></div>
                </div>
            </div>
        </div>
        <div class="col-sm-9">
            <div class="grid">
                <div class="grid-block">
                    <div class="center"><h6>Nine</h6></div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-2">
            <div class="grid">
                <div class="grid-block">
                    <div class="center"><h6>Two</h6></div>
                </div>
            </div>

        </div>
        <div class="col-sm-10">
          <div class="grid">
              <div class="grid-block">
                  <div class="center"><h6>Ten</h6></div>
              </div>
          </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-1">
        <div class="grid">
          <div class="grid-block">
              <div class="center"><h6>One</h6></div>
          </div>
        </div>
      </div>
      <div class="col-sm-11">
        <div class="grid">
          <div class="grid-block">
            <div class="center"><h6>Eleven</h6></div>
          </div>
        </div>
      </div>
    </div>
</div>
  `,
  styles: [`
  .grid {
    position: relative;
    display: block;
    margin-bottom: 0.625rem;
    background-color: #fff;
    border: 1px solid #e5e5e5;
  }
  .grid .grid-block {
    padding: 16px 0;
  }
  .center {
    text-align: center;
  }
  .grid .grid-block h6 {
    margin: 10px 0;
    font-size: 14px;
    font-weight: 400;
  }
  `]
})
export class GridsView {}