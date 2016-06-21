import { provide } from '@angular/core';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { DOMOutsideEventPlugin } from './src/dom-outside-event.plugin';

export const CUSTOM_EVENTS_PLUGINS = [
  provide(EVENT_MANAGER_PLUGINS, { multi: true, useClass: DOMOutsideEventPlugin })
];

