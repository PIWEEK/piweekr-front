import '../../rxjs-operators';

import { Http, Headers, RequestMethod, Request, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { URL_BASE, API_ROUTES } from '../api.routes';
import { UserSessionService } from "../user-session.service";

export class ApiCommons {
    constructor (
        protected http: Http,
        protected session: UserSessionService
    ) {}

    private req(method: RequestMethod, urlId: string, urlParams?: any[], data?: any): Observable<any> {
        try {
            const params = urlParams || [];
            const route = API_ROUTES[urlId];

            if (!route) {
                return this.logError(new Error(`Can't find the route ${urlId}`));
            }

            const url = route(URL_BASE, ...urlParams);

            let headers = {
                'Content-Type': 'application/json'
            };

            const token = this.session.token;
            if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            }

            const options = {
                method: method,
                url,
                body: null,
                headers: new Headers(headers)
            };

            if (data) {
                options.body = (typeof data === 'string') ? data : JSON.stringify(data);
            }

            return this.http
                .request(new Request(options))
                .map(res => res.json())
                .timeout(10000, new Error('delay exceeded'))
                //.retry(2)
                .catch(this.logError);
        } catch (err) {
            return this.logError(err);
        }
    }

    get(urlId: string, urlParams?: any[]): Observable<any> {
        return this.req(RequestMethod.Get, urlId, urlParams);
    }

    post(urlId: string, urlParams?: any[], data?: any): Observable<any> {
        return this.req(RequestMethod.Post, urlId, urlParams, data);
    }

    put(urlId: string, urlParams?: any[], data?: any): Observable<any> {
        return this.req(RequestMethod.Put, urlId, urlParams, data);
    }

    delete(urlId: string, urlParams?: any[]): Observable<any> {
        return this.req(RequestMethod.Delete, urlId, urlParams);
    }

    private logError (error: Error) {
        return Observable.throw(error || new Error('There was an error with the request'));
    }
}
