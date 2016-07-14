import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ApiCommons } from './api.commons';
import { User } from '../../model/user';
import { UserSessionService } from '../user-session.service';

@Injectable()
export class UserApiService extends ApiCommons {
    constructor(http: Http, session: UserSessionService) {
        super(http, session);
    }

    list(): Observable<User[]> {
        return this.get("users").map(
            jsonList => jsonList.map(u => new User(u))
        ) ;
    }

    update(userId: string, user: {email: string, fullName: string, avatar: Object}): Observable<User> {
        return this.patch("userDetail", [userId], user).map(
            u => new User(u)
        ) ;
    }
}
