/* Avoid: 'error TS2304: Cannot find name <type>' during compilation */
///<reference path="../../typings/index.d.ts"/>

import { bootstrap }            from '@angular/platform-browser-dynamic';
import { HomeComponent }         from './layout/home/home.component';
import { APP_ROUTER_PROVIDERS } from './router/app.routes';

bootstrap(HomeComponent, [
  APP_ROUTER_PROVIDERS
])
.catch(err => console.error(err));
