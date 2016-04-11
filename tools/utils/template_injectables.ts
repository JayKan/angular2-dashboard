/// <reference path="../manual_typings/slash.d.ts" />
import * as slash from 'slash';
import { join } from 'path';
import { ENV, APP_BASE, APP_DEST } from '../config';

let injectables: string[] = [];

export function transformPath(plugins, env) {
  return function(filePath) {
    filePath = ENV === 'prod' ? filePath.replace(`/${APP_DEST}`, '') : filePath;
    arguments[0] = join(APP_BASE, filePath) + `?${Date.now()}`;
    return slash(plugins.inject.transform.apply(plugins.inject.transform, arguments));
  };
}




