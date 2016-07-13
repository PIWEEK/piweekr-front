import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ApiCommons } from './api.commons';

import { User } from '../../model/user';
import { LoginAuth } from '../../model/auth';
import { UserSessionService } from '../../services/user-session.service';

const HARDCODED_USER = {
    userName: "alotor",
    email: "fake@gmail.com",
    fullName: "Fake User",
    avatar: {
        head: 1, body: 2, legs: 3, background: "#FF0000"
    },
    token: "XXXX"
};

@Injectable()
export class AuthApiService extends ApiCommons {
    constructor(http: Http, private session: UserSessionService) {
        super(http);
    }

    login(auth: LoginAuth): Observable<User> {
        //const req$ = this.post("login", auth);
        const req$ = Observable.of(HARDCODED_USER);

        req$.subscribe(
            (json) => this.session.store(json)
        );

        return req$.map(
            json => new User(json)
        );
    }
}