import * as express from 'express';
import * as openResource from 'open';
import * as serverStatic from 'serve-static';
import { resolve } from 'path';
import * as util from 'gulp-util';
import * as codeChangeTool from './code_change_tools';
import { APP_BASE, DOCS_DEST, DOCS_PORT, COVERAGE_PORT, APP_DEST } from '../config';

export function serveSPA() {
  // let server = express();
  codeChangeTool.listen();
  // server.use.apply(server, codeChangeTool.middleware);
  
  // server.listen(2000, () => {
  //   util.log('Server is listening on port: ' + 2000);
  //   openResource('http://localhost:' + 2000 + APP_BASE + APP_DEST);
  // });
  
}

export function notifyLiveReload(e) {
  let fileName = e.path;
  codeChangeTool.changed(fileName);
}

export function serveDocs() {
  let server = express();

  server.use(
      APP_BASE,
      serverStatic(resolve(process.cwd(), DOCS_DEST))
  );

  server.listen(DOCS_PORT, () => {
    openResource('http://localhost:' + DOCS_PORT + APP_BASE);
  });
}

export function serveCoverage() {
  let server = express();

  server.use(
      APP_BASE,
      serverStatic(resolve(process.cwd(), 'coverage'))
  );

  server.listen(COVERAGE_PORT, () => {
    openResource('http://localhost:' + COVERAGE_PORT + APP_BASE);
  });
}