import { Pipe, PipeTransform } from '@angular/core';
import moment from "moment";

@Pipe({ name: 'KeysFilter',  pure: false })
export class KeysFilter implements PipeTransform {
    transform(value: any, args: any[] = null): any {
        let keys = [];
        for (let key in value) {
            if (value.hasOwnProperty(key)) {
                keys.push({
                    key: key,
                    value: value[key]
                });
            }
        }
        return keys;
    }
}

/*
 * Moment date transform
 */
@Pipe({name: 'moment'})
export class MomentPipe implements PipeTransform {
    transform(value: moment.Moment): string {
        return `${value.format('DD/MM/YYYY HH:mm')} (${value.fromNow()})`;
    }
}
