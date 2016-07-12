import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'KeysFilter',  pure: false })
export class KeysFilter implements PipeTransform {
    transform(value: any, args: any[] = null): any {
        let keys = [];
        for (let key in value) {
            keys.push({
                key: key,
                value: value[key]
            });
        }
        return keys;
    }
}
