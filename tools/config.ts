import { readFileSync } from 'fs';
import { argv } from 'yargs';

// --------------
// Configuration.
const ENVIRONMENTS = {
  DEVELOPMENT: 'dev',
  PRODUCTION: 'prod'
};

const BOWER_COMPONENTS      = 'bower_components';


export const TOOLS_DIR      = 'tools';
export const DOCS_DEST      = 'docs';
export const DIST_DIR       = 'dist';

export const APP_SRC        = 'src';
export const ASSETS_SRC     = `${APP_SRC}/assets`;

export const PORT           = argv['port']           || 3000;
export const DOCS_PORT      = argv['docs-port']      || 3003;
export const COVERAGE_PORT  = argv['coverage-port']  || 3004;

  
export const ENV            = getEnvironment();
export const APP_BASE       = argv['base']           || '/';
export const ENABLE_HOT_LOADING   = !!argv['hot-loader'];

export const APP_DEST       = `${DIST_DIR}/${ENV}`;
export const CSS_DEST       = `${APP_DEST}/css`;
export const JS_DEST        = `${APP_DEST}/js`;
export const DEV_DEST       = `${DIST_DIR}/dev`;
export const PROD_DEST      = `${DIST_DIR}/prod`;
export const TMP_DEST       = `${DIST_DIR}/tmp`;

export const APP_ASSETS: InjectableDependency[] = [
  { src: `${ASSETS_SRC}/main.css`,                                                   inject: true,   dest: CSS_DEST },
  { src: `${ASSETS_SRC}/${BOWER_COMPONENTS}/jqvmap/dist/jqvmap.css`,                 inject: true,   dest: CSS_DEST },
  { src: `${ASSETS_SRC}/${BOWER_COMPONENTS}/jqvmap/dist/jquery.vmap.min.js`,             inject: 'libs', dest: JS_DEST  },
  { src: `${ASSETS_SRC}/${BOWER_COMPONENTS}/jqvmap/dist/maps/jquery.vmap.world.js`,  inject: 'libs', dest: JS_DEST  } 
];

// Declare NPM dependencies (Note that globs should not be injected).
export const DEV_NPM_DEPENDENCIES: InjectableDependency[] = normalizeDependencies([
  { src: 'systemjs/dist/system-polyfills.src.js',                   inject: 'shims',  dest: JS_DEST    },
  { src: 'systemjs/dist/system.src.js',                             inject: 'shims',  dest: JS_DEST    },
  { src: 'reflect-metadata/Reflect.js',                             inject: 'shims',  dest: JS_DEST    },
  { src: 'es6-shim/es6-shim.js',                                    inject: 'shims',  dest: JS_DEST    },
  { src: 'rxjs/bundles/Rx.js',                                      inject: 'libs',   dest: JS_DEST    },
  { src: 'zone.js/dist/zone.js',                                    inject: 'libs',   dest: JS_DEST    },
  { src: 'jquery/dist/jquery.min.js',                               inject: 'libs',   dest: JS_DEST    },
  { src: 'moment/min/moment.min.js',                                inject: 'libs',   dest: JS_DEST    },
  { src: 'chart.js/dist/Chart.bundle.min.js',                       inject: 'libs',   dest: JS_DEST    },
  { src: 'fullcalendar/dist/fullcalendar.min.js',                   inject: 'libs',   dest: JS_DEST    },
  { src: 'fullcalendar/dist/fullcalendar.min.css',                  inject: true,     dest: CSS_DEST   },
  { src: 'c3/c3.css',                                               inject: true,     dest: CSS_DEST   },
  { src: 'c3/node_modules/d3/d3.js',                                inject: 'libs',   dest: JS_DEST    },
  { src: 'c3/c3.js',                                                inject: 'libs',   dest: JS_DEST    },
  { src: 'perfect-scrollbar/dist/css/perfect-scrollbar.css',        inject: true,     dest: CSS_DEST   },
  { src: 'perfect-scrollbar/dist/js/perfect-scrollbar.jquery.js',   inject: 'libs',   dest: JS_DEST    },
]);

export const PROD_NPM_DEPENDENCIES: InjectableDependency[] = normalizeDependencies([
  { src: 'systemjs/dist/system-polyfills.src.js', inject: 'shims'                   },
  { src: 'reflect-metadata/Reflect.js', inject: 'shims'                             },
  { src: 'es6-shim/es6-shim.min.js', inject: 'shims'                                },
  { src: 'systemjs/dist/system.js', inject: 'shims'                                 }
]);

export const DEV_DEPENDENCIES   = DEV_NPM_DEPENDENCIES.concat(APP_ASSETS);
export const PROD_DEPENDENCIES  = PROD_NPM_DEPENDENCIES.concat(APP_ASSETS);

// --------------
// Private.
// --------------
function normalizeDependencies(deps: InjectableDependency[]) {
  deps
      .filter((d:InjectableDependency) => !/\*/.test(d.src)) // Skip globs
      .forEach((d:InjectableDependency) => d.src = require.resolve(d.src));
  return deps;
}
function getEnvironment() {
  let base: string[] = argv['_'];
  let prodKeyword = !!base.filter(o => o.indexOf(ENVIRONMENTS.PRODUCTION) >= 0).pop();
  if (base && prodKeyword || argv['env'] === ENVIRONMENTS.PRODUCTION) {
    return ENVIRONMENTS.PRODUCTION;
  } else {
    return ENVIRONMENTS.DEVELOPMENT;
  }
}

interface InjectableDependency {
  src: string;
  inject: string | boolean;
  dest?: string;
}