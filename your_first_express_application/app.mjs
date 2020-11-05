 import {default as express} from 'express';
 import {default as hbs} from 'hbs';
 import * as path from 'path';
 // import * as favicon from 'server-favico';
 import {default as logger} from 'morgan';
 import {default as cookieParser} from 'cookie-parser';
 import {default as bodyParser} from 'body-parser';
 import * as http from 'http';
 import {approotdir} from './approotdir.mjs';
 const __dirname =  approotdir;
import {
  normalizePort, onError, onListening, handle404, basicErrorHandler
} from './appsupport.mjs';

import { router as indexRouter } from './routes/index.mjs';
// import {router as notesRouter} from './routes/notes.mjs';