import { Component, Input } from '@angular/core';

const BASE_DIR = './app/components/fork';

@Component({
    selector: 'fork',
    templateUrl: `${BASE_DIR}/fork.component.html`,
    styleUrls: [`${BASE_DIR}/fork.component.css`]
})

export class ForkComponent {
    @Input('card-id') cardId: string;

    ngOnInit() {
        console.log('ForkComponent');
    }

    forkProject() {
        console.log(`Fork Project with ID: ${this.cardId}`);
    }
}
