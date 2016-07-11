import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ApiCommons } from './api.commons';
import { Idea } from '../model/idea';

@Injectable()
export class IdeaApiService extends ApiCommons {
    constructor(http: Http) {
        super(http);
    }

    list(): Observable<Idea[]> {
        return this.get("ideas").map(
            json => json.map(v => new Idea(v))
        ) ;
    }
}


