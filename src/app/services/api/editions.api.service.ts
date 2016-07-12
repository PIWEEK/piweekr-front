import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ApiCommons } from './api.commons';
import { Edition } from '../../model/edition';

@Injectable()
export class EditionApiService extends ApiCommons {
    constructor(http: Http) {
        super(http);
    }

    list(): Observable<Edition[]> {
        return this.get("editions").map(
            json => json.map(v => new Edition(v))
        ) ;
    }
}
