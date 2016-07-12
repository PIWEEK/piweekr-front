import { Component, Input } from '@angular/core';

import { CommentsContainerComponent } from '../comments-container/comments-container.component';
import { InvitedComponent } from '../invited/invited.component';
import { ForkComponent } from '../fork/fork.component';
import { WatchComponent } from '../watch/watch.component';
import { OwnerComponent } from '../owner/owner.component';

const BASE_DIR = './app/components/card';

@Component({
    selector: 'card',
    templateUrl: `${BASE_DIR}/card.component.html`,
    styleUrls: [`${BASE_DIR}/card.component.css`],
    directives: [
        CommentsContainerComponent,
        InvitedComponent,
        ForkComponent,
        WatchComponent,
        OwnerComponent
    ]
})

export class CardComponent {
    @Input() card: Object;

    ngOnInit() {
        console.log('CardComponent');
    }
}
