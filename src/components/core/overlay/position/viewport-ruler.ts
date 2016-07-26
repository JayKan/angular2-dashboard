import { Injectable } from '@angular/core';


/**
 * Simple utility for getting the bounds of the browser viewport.
 */
@Injectable()
export class ViewportRuler {

  /** Gets a ClientRect for the viewport's bounds. */
  getViewportRect(): ClientRect {
    const documentRect = document.documentElement.getBoundingClientRect();
    const scrollPosition = this.getViewportScrollPosition(documentRect);
    const height = window.innerHeight;
    const width = window.innerWidth;

    return {
      top: scrollPosition.top,
      left: scrollPosition.left,
      bottom: scrollPosition.top + height,
      right: scrollPosition.left + width,
      height,
      width,
    };
  }

  /**
   * Gets the (top, left) scroll position of the viewport.
   * @param documentRect
   */
  getViewportScrollPosition(documentRect = document.documentElement.getBoundingClientRect()) {
    // The top-left-corner of the viewport is determined by the scroll position of the document
    // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
    // whether `document.body` or `document.documentElement` is the scrolled element, so reading
    // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
    // `document.documentElement` works consistently, where the `top` and `left` values will
    // equal negative the scroll position.
    const top =  documentRect.top < 0 && document.body.scrollTop == 0 ?
      -documentRect.top :
      document.body.scrollTop;
    const left = documentRect.left < 0 && document.body.scrollLeft == 0 ?
      -documentRect.left :
      document.body.scrollLeft;

    return { top, left };
  }
}
