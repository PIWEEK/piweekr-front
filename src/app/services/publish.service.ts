import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PublishService {
    private publishSubject = new Subject<Object>();

    publish$ = this.publishSubject.asObservable();

    publish(data: Object) {
        this.publishSubject.next(data);
    }
}
