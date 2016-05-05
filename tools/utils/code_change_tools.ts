import { PORT, APP_DEST, APP_BASE, ENABLE_HOT_LOADING } from '../config';
import * as browserSync from 'browser-sync';
import * as express from 'express';
import * as tinylrFn from 'tiny-lr';
import * as connectLivereload from 'connect-livereload';

let tinylr = tinylrFn();

let runServer = () => {
  let routes:any = {
    [`/${APP_DEST}`]: APP_DEST,
    '/node_modules': 'node_modules'
  };
  browserSync({
    middleware: [require('connect-history-api-fallback')()],
    port: PORT,
    startPath: '/',
    server: {
      baseDir: APP_DEST,
      routes: routes
    }
  });

};

let LIVE_RELOAD_PORT   = 9005;

let listen = () => {
  runServer();
  // tinylr.listen(LIVE_RELOAD_PORT);
};

let changed = files => {
  if (!(files instanceof Array)) {
    files = [files];
  }
  browserSync.reload(files);
  // tinylr.changed({
  //   body: { files }
  // });
};



let tinylrMiddleware = connectLivereload({ port: LIVE_RELOAD_PORT });

let middleware = [
  APP_BASE,
  (req, res, next) => {
    // if (ENABLE_HOT_LOADING) {
    //   next();
    // } else {
    //   tinylrMiddleware(req, res, next);
    // }
    tinylrMiddleware(req, res, next);
  },
  express.static(process.cwd())
];


export { listen, changed, middleware };



