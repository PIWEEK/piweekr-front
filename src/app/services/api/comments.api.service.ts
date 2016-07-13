import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ApiCommons } from './api.commons';
import { Comment } from '../../model/comment';
import { UserSessionService } from '../user-session.service';

@Injectable()
export class CommentsApiService extends ApiCommons {
    constructor(http: Http, session: UserSessionService) {
        super(http, session);
    }

    list(entity: string, uuid: string): Observable<Comment[]> {
        return this.get("comments", [entity, uuid]).map(
            json => json.map(v => new Comment(v))
        ) ;
    }

    create(entity: string, uuid: string, comment: Comment): Observable<Comment> {
        return this.post("comments", [entity, uuid], comment).map(
            json => new Comment(json)
        ) ;
    }
}
