/* Avoid: 'error TS2304: Cannot find name <type>' during compilation */
///<reference path="../../typings/index.d.ts"/>

import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { provideForms } from '@angular/forms';
import { MainComponent } from './layout/main/main.component';
import { APP_ROUTER_PROVIDERS } from './router/app.routes';
import { API_PROVIDERS } from './services/api.service';
import { UserSessionService } from "./services/user-session.service";

bootstrap(MainComponent, [
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    API_PROVIDERS,
    UserSessionService,
    provideForms()
])
.catch(err => console.error(err));
