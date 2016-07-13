import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ApiCommons } from './api.commons';
import { Project } from '../../model/project';
import { UserSessionService } from '../user-session.service';

@Injectable()
export class ProjectApiService extends ApiCommons {
    constructor(http: Http, session: UserSessionService) {
        super(http, session);
    }

    list(): Observable<Project[]> {
        return this.get("projects").map(
            json => json.map(v => new Project(v))
        ) ;
    }
}



