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
        // return this.get("comments", [uuid]).map(
        //     json => json.map(v => new Comment(v))
        // ) ;

        return Observable.of([
            new Comment({
                uuid: "aaaaaaa",
                owner: {
                    userName: "josemanuel",
                    email: "fake@gmail.com",
                    fullName: "Jose Manuel Rosa",
                    avatar: {
                        head: 1, body: 1, legs: 1, background: "#FF0000"
                    }
                },
                createdAt: "2016-07-12T13:00:00.000Z",
                content: "Lorem ipsum dolor dolores llamame lola"
            }),
            new Comment({
                uuid: "bbbbbbbb",
                owner: {
                    userName: "xaviju",
                    email: "fake@gmail.com",
                    fullName: "Xavier Julian",
                    avatar: {
                        head: 2, body: 1, legs: 1, background: "#FABADA"
                    }
                },
                createdAt: "2016-07-12T13:10:00.000Z",
                content: "Lorem ipsum dolor dolores llamame lola"
            }),
            new Comment({
                uuid: "ccccccccc",
                owner: {
                    userName: "bameda",
                    email: "fake@gmail.com",
                    fullName: "David Barragan",
                    avatar: {
                        head: 3, body: 1, legs: 1, background: "#BADA55"
                    }
                },
                createdAt: "2016-07-12T13:20:00.000Z",
                content: "Lorem ipsum dolor dolores llamame lola"
            })
        ]);
    }
}
