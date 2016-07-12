import { Component, Input } from '@angular/core';

const BASE_DIR = './app/components/watch';

@Component({
    selector: 'watch',
    templateUrl: `${BASE_DIR}/watch.component.html`,
    styleUrls: [`${BASE_DIR}/watch.component.css`]
})

export class WatchComponent {
    @Input('card-id') cardId: string;

    ngOnInit() {
        console.log('WatchComponent');
    }

    forkProject() {
        console.log(`Watch Project with ID: ${this.cardId}`);
    }
}
