import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ApiCommons } from './api.commons';

import { User } from '../../model/user';
import { LoginAuth } from '../../model/auth';
import { UserSessionService } from '../user-session.service';

const HARDCODED_USER = {
    username: "alotor",
    email: "fake@gmail.com",
    fullName: "Fake User",
    avatar: {
        head: 1, body: 2, legs: 3, background: "#FF0000"
    },
    token: "XXXX"
};

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
