import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ApiCommons } from './api.commons';
import { Idea } from '../../model/idea';
import { UserSessionService } from '../user-session.service';

@Injectable()
export class IdeaApiService extends ApiCommons {
    constructor(http: Http, session: UserSessionService) {
        super(http, session);
    }

    list(): Observable<Idea[]> {
        return this.get("ideas").map(
            json => json.map(v => new Idea(v))
        ) ;
    }

    create(idea: Idea): Observable<Idea> {
        const payload = {
            title: idea.title,
            description: idea.description,
            isPublic: idea.isPublic || false,
            invitedUsernames: idea.users.map( u => u.username )
        };
        return this.post("ideas", [], payload);
    }
}


