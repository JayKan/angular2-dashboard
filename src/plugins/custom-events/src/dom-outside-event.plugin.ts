import { Injectable } from '@angular/core';
import { DomEventsPlugin } from '@angular/platform-browser';

// our custom DOMOutsidePlugin will extend from internal A2 DomEventsPlugin class
// so it will contains the zone stuffs.
@Injectable()
export class DOMOutsideEventPlugin extends DomEventsPlugin {
  
  eventMap: Object = {
    'clickOutside'    : 'click',
    'mousedownOutside': 'mousedown',
    'mouseupOutside'  : 'mouseup',
    'mousemoveOutside': 'mousemove'
  };
  
  supports(eventName: string): boolean {
    return this.eventMap.hasOwnProperty(eventName);
  }
  
  addEventListener(element: HTMLElement, eventName: string, handler: Function): Function {
    
    const zone = this.manager.getZone();
    // Each "outside" event is captured by an "inside" event at the
    // document level. Translate the element-local event type to the
    // document-local event type.
    const documentEvent = this.eventMap[eventName];

    // I invoke the host event handler with the given event.
    // Now that we know that the document-local event has to be
    // translated into an element-local host binding event, we
    // need to re-enter the Angular 2 change-detection zone so
    // that view-model changes made within the event handler will
    // trigger a new round of change-detection.
    const triggerDOMEventInZone = (event) => zone.run(() => handler(event));
    
    // I check to see if the given event originated from within the
    // host element. If it did, the event is ignored. If it did NOT,
    // then the "outside" event binding is invoked with the given event.
    const checkEventType = (event) => {
      let current = event.target;
      do {
        if (current === element) {
          return;
        }
      } while (current.parentNode && (current = current.parentNode));
      
      // If we made it this far, we didn't bubble past the host
      // element. As such, we know that the event was initiated
      // from outside the host element. It is therefore an
      // "outside" event and needs to be translated into a host-
      // local event that integrates with change-detection.
      triggerDOMEventInZone(event);
    };
    
    // Add eventListener to document
    const addDocumentEventListener = () => document.addEventListener(documentEvent, checkEventType, true);
    // Tear down the "outside" event binding.
    const removeDocumentEventListener = () => document.removeEventListener(documentEvent, checkEventType, true);

    // Zone.js patches event-target code. As such, when we attach the
    // the document-level event handler, we want to do so outside of
    // the change-detection zone so that our checkEventTarget()
    // doesn't trigger more change-detection than it has to. Once we
    // know that we have to parle the document-level event into an
    // element-local event, we'll re-enter the Angular zone.
    zone.runOutsideAngular(addDocumentEventListener);
    
    // Return de-registration method.
    return removeDocumentEventListener;
  }

  // I register the event on the global target and return the event
  // de-registration method.
  addGlobalEventListener(target: string, eventName: string, handler: Function): Function {
    // For the purposes of an "outside" event, it will never be
    // possible to actually click / mouse outside of the document
    // or the window object. As such, simply ignore these global
    // context, providing a no-op binding.
    if ((target === 'document') || (target === 'window')) {
      return;
    }

    // If the target was not "document" or "window", it must be body
    // (the only other "global" host binding). While not very likely,
    // it is possible to click outside of the body tag (by clicking
    // on the HTML tag). As such, let's add the event listener to the
    // body tag directly.
    return this.addEventListener(document.body, eventName, handler);
  }
}