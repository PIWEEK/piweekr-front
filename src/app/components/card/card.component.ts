import { Component, Input } from '@angular/core';

import { CommentsContainerComponent } from '../comments-container/comments-container.component';
import { AvatarEditorComponent } from "../avatar-editor/avatar-editor.component";
import { InvitedComponent } from '../invited/invited.component';
import { ForkComponent } from '../fork/fork.component';
import { WatchComponent } from '../watch/watch.component';
import { OwnerComponent } from '../owner/owner.component';
import { UserSessionService } from '../../services/user-session.service';

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
        OwnerComponent,
        AvatarEditorComponent
    ]
})

export class CardComponent {
    @Input() entity: string;
    @Input() card: Object;
    @Input('owner-menu') ownerMenu: Array<Object>;

    constructor(public session: UserSessionService) {}
}
