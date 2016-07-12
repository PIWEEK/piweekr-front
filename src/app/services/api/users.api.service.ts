import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ApiCommons } from './api.commons';
import { User } from '../../model/user';

@Injectable()
export class UserApiService extends ApiCommons {
    constructor(http: Http) {
        super(http);
    }

    list(): Observable<User[]> {
        return this.get("users").map(
            jsonList => jsonList.map(u => new User(u))
        ) ;
    }
}
