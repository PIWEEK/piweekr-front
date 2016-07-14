import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ApiCommons } from './api.commons';

import { User } from '../../model/user';
import { LoginAuth } from '../../model/auth';
import { UserSessionService } from '../user-session.service';

@Injectable()
export class AuthApiService extends ApiCommons {
    constructor(http: Http, session: UserSessionService) {
        super(http, session);
    }

    login(auth: LoginAuth): Observable<User> {
        return this.post("login", [], auth)
                   .do(json => this.session.store(json))
                   .map(json => new User(json));
    }
}
