import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PublishService {
    private publishSubject = new Subject<any>();

    publish$: Observable<any> = this.publishSubject.asObservable();

    publish(data: any) {
        this.publishSubject.next(data);
    }
}
