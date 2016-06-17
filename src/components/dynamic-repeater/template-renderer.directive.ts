import {
  Directive,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

// I generate Class definitions that exposes custom sub-properties off the "context"
// namespace. This class always exposes:
// --
// * render (aliased as "template")
// * context
// --
// ... however, you can additionally provide other sub-properties of "context" to make
// the binding syntax easier to read.
export function createTemplateRenderer(...propertyNames: string[]) {
  
  // Converting the incoming sub-property names into namedspaced inputs off the `context`
  // object. For instance, covert `foo` into `context.foo`
  const contextProperties = propertyNames.map(function operator(propertyName: string): string {
    return('context.' + propertyName);
  });
  
  @Directive({
    selector: 'template[render]',
    inputs: [ 'template:render', 'context', ...contextProperties ]
  })
  class TemplateRendererDirective implements OnInit {

    // `context` will be exposed to the embedded view.
    // NOTE: The context here is an injectable input.
    context: any;

    // `template` is the templateRef that we are cloning into the view container.
    template: TemplateRef<any>;

    // `viewContainerRef` is where we're injecting our cloned template.
    // viewContainerRef: ViewContainerRef;

    constructor(private _viewContainerRef: ViewContainerRef) {
      this.context = {};
    }

    // When the class is initialized, after the inputs have been
    // bound for the first time.
    ngOnInit(): void {
      if (this.template && this.context) {
        this._viewContainerRef.createEmbeddedView(this.template, this.context);
      }
    }
  }

  // Return the dynamically generated class.
  return TemplateRendererDirective;
}