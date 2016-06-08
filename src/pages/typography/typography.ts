import { Component, ViewEncapsulation } from '@angular/core';
import { Container } from '../../components/container/container';

@Component({
  selector: 'typography',
  directives: [Container],
  encapsulation: ViewEncapsulation.None,
  template: `
  <div class="animate">				
	  <div class="row">
		  <div class="col-lg-8 col-md-6">
		    <container [headerStyle]="'primary'">
		      <table-header>
		        <span class="title">Typography</span>
          </table-header>
         
          <table-body> 
            <div class="content">
              <h1>Heading 1 <small>Sub-heading</small> </h1> 
              <h2>Heading 2 <small>Sub-heading</small> </h2> 
              <h3>Heading 3 <small>Sub-heading</small> </h3> 
              <h4>Heading 4 <small>Sub-heading</small> </h4>
              <h5>Heading 5 <small>Sub-heading</small> </h5> 
              <h6>Heading 6 <small>Sub-heading</small> </h6>
              
              <p class="lead">
                This is an example of lead body copy.
              </p>
              <p>
                This is an example of standard paragraph text. This is an example of <a href="#">link anchor text</a> within body copy.
              </p> 
              <p> 
                <small>This is an example of small, fine print text.</small> 
              </p>
               
              <p>
                <strong>This is an example of strong, bold text.</strong>
              </p>
               
              <p> 
                <em>This is an example of emphasized, italic text.</em> 
              </p>           
            </div>
          </table-body>
        </container>
        
			  <container [headerStyle]="'danger'">
			    <table-header>
			      <span class="title">Block quotes</span>  
          </table-header>
          
          <table-body>
            <div class="content">
              <h5>Default block qoute</h5>
              <blockquote class="blockquote">
                <p class="m-b-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              </blockquote> 
              <h5>Block quote with Citation</h5> 
              <blockquote class="blockquote">
                <p class="m-b-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
              </blockquote>
              <h5>Right Aligned Block quote</h5>
              <blockquote class="blockquote blockquote-reverse">
                 <p class="m-b-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              </blockquote>              
            </div>
          </table-body>
			  </container>
			  
			  <container [headerStyle]="'warning'">
			    <table-header>
			     <span class="title">Code</span>
          </table-header>
          
          <table-body>
            <div class="content">
              <p>This is an example of an inline code element within body copy. Wrap inline code within a <code>&lt;code&gt;...&lt;/code&gt;</code>tag.</p>
              <pre class="breadcrumb">This is an example of preformatted text.</pre>
            </div>
          </table-body>
        </container>             
		  </div>
		
		  <div class="col-lg-4 col-md-6"> 
		    <container [headerStyle]="'info'">
		      <table-header>
		        <span class="title">Unordered Lists</span>
          </table-header>
		      <table-body>
		        <div class="content">
		          <ul class="unordered"> 
                <li>Lorem ipsum dolor sit amet, consectetur</li> 
                <li>Necessitatibus quidem similique</li> 
                <li>lorem ipsum dolor sit amet
                  <ul class="unordered"> 
                    <li>Oh yay debitis</li> 
                    <li>error odio</li> 
                    <li>Success dolore magni</li> 
                  </ul>
                </li> 
              <li>List Item</li> 
            </ul> 
            </div>
		      </table-body>
        </container>
        
        <container [headerStyle]="'warning'">
          <table-header>
            <span class="title">Ordered Lists</span>
          </table-header>
          <table-body>
            <div class="content">
              <ol class="ordered">
                <li>List Item lorem ipsum dolor</li> 
                <li>List Item lorem ipsum dolor</li> 
                <li>List Item lorem ipsum dolor</li> 
                <li>List Item lorem ipsum dolor</li> 
              </ol>
            </div>
          </table-body>
        </container>
        
        <container [headerStyle]="'success'">
          <table-header>
            <span class="title">Unstyled List</span>
          </table-header>
          <table-body>
            <div class="content">
              <ul class="list-unstyled"> 
                <li>List Item lorem ipsum</li> 
                <li>List Item lorem ipsum</li> 
                <li>List Item lorem ipsum</li> 
              </ul>
            </div>
          </table-body>
        </container>
        
        <container [headerStyle]="'danger'">
          <table-header>
            <span class="title">Inline List</span>
          </table-header>
          <table-body>
            <div class="content">
            <ul class="list-inline">
              <li class="list-inline-item">Lorem ipsum</li>
              <li class="list-inline-item"> Phasellus iaculis </li>
              <li class="list-inline-item">Nulla volutpat</li>
            </ul>
            </div>
          </table-body>
        </container>
        
        <container [headerStyle]="'info'">
          <table-header>
            <span class="title">Emphasis Classes</span>
          </table-header>
          <table-body>
            <div class="content">
              <span class="text-muted">This is an example of muted text.</span><br> 
              <span class="text-primary">This is an example of primary text.</span><br> 
              <span class="text-success">This is an example of success text.</span><br> 
              <span class="text-info">This is an example of info text.</span><br> 
              <span class="text-warning">This is an example of warning text.</span><br> 
              <span class="text-danger">This is an example of danger text.</span>
            </div>
          </table-body>
        </container>
        
        <container [headerStyle]="'primary'">
          <table-header>
            <span class="title">Alignment Helpers</span>
          </table-header>
          <table-body>
            <div class="content">
             <p class="left">Left aligned text on all viewport sizes.</p>
             <p class="center">Center aligned text on all viewport sizes.</p>
             <p class="right">Right aligned text on all viewport sizes.</p> 
            </div>
          </table-body>
        </container>       
      </div>
    </div>
  </div>  
  `,
  styleUrls: ['pages/typography/typography.style.css']
})

export class TypographyView {

}