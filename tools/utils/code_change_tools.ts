import {PORT, APP_DEST} from '../config';
import * as browserSync from 'browser-sync';

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


let listen = () => {
  runServer();
};

let changed = files => {
  if (!(files instanceof Array)) {
    files = [files];
  }
  browserSync.reload(files);
};

export { listen, changed };



