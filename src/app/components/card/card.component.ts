import { Component, Input } from '@angular/core';

import { CommentComponent } from '../comment/comment.component';
import { InvitedComponent } from '../invited/invited.component';
import { ForkComponent } from '../fork/fork.component';

const BASE_DIR = './app/components/card';

@Component({
    selector: 'card',
    templateUrl: `${BASE_DIR}/card.component.html`,
    styleUrls: [`${BASE_DIR}/card.component.css`],
    directives: [CommentComponent, InvitedComponent, ForkComponent]
})

export class CardComponent {
    @Input() card: Object;

    ngOnInit() {
        console.log('CardComponent');
    }
}
