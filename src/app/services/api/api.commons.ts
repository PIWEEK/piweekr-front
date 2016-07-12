import '../../rxjs-operators';

import { Http, Headers, RequestMethod, Request, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { API_ROUTES } from '../api.routes';

export class ApiCommons {
    constructor (
        private _http: Http
    ) {}

    get(urlId: string, urlParams?: any[], data?: any): Observable<any> {
        const base = "http://localhost:5000/api/v1";
        const url = API_ROUTES[urlId](base, urlParams);

        const options = {
            method: RequestMethod.Get,
            url,
            body: null,
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        };

        if (data) {
            options.body = (typeof data === 'string') ? data : JSON.stringify(data);
        }

        return this._http
                   .request(new Request(options))
                   .map(res => res.json())
                   .catch(this.logError);
    }

    private logError (error: Error) {
        return Observable.throw(error || 'There was an error with the request');
    }
}
