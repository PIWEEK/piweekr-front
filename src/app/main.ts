/* Avoid: 'error TS2304: Cannot find name <type>' during compilation */
///<reference path="../../typings/index.d.ts"/>

import { bootstrap } from '@angular/platform-browser-dynamic';
import { MainComponent } from './layout/main/main.component';
import { APP_ROUTER_PROVIDERS } from './router/app.routes';
import { HTTP_PROVIDERS } from '@angular/http';
import { API_PROVIDERS } from './services/api.service';

bootstrap(MainComponent, [
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    API_PROVIDERS
])
.catch(err => console.error(err));
