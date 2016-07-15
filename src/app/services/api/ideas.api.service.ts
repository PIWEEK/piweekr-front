import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ApiCommons } from './api.commons';
import { Idea } from '../../model/idea';
import { User } from '../../model/user';
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
        return this.post("ideas", [], payload).map(
            json => new Idea(json)
        );
    }

    promote(ideaId: string): Observable<any> {
        return this.post("ideaPromotion", [ideaId]);
    }

    update(ideaId: string, values: {title: string, description: string}): Observable<Idea> {
        return this.patch("ideaDetail", [ideaId], values);
    }

    fetchInvited(ideaId: string): Observable<User[]> {
        return this.get("ideaInvited", [ideaId])
            .map(
                json => json.map(v => new User(v.user))
            );
    }

    invite(ideaId, username): Observable<User[]> {
        const payload = {
            invitedUsernames: [username]
        };
        return this.post("ideaInvited", [ideaId], payload);
    }

}


