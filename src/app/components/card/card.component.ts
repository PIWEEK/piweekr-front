import { Observable } from 'rxjs/Observable';
import { Component, Input } from '@angular/core';

import { CommentsContainerComponent } from '../comments-container/comments-container.component';
import { AvatarEditorComponent } from "../avatar-editor/avatar-editor.component";
import { UserAutocompleteComponent } from "../user-autocomplete/user-autocomplete.component";
import { InvitedComponent } from '../invited/invited.component';
import { ForkComponent } from '../fork/fork.component';
import { WatchComponent } from '../watch/watch.component';
import { OwnerComponent } from '../owner/owner.component';
import { UserSessionService } from '../../services/user-session.service';
import { ApiService } from "../../services/api.service";
import { PublishService } from '../../services/publish.service';

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
    @Input() card: any;
    @Input('owner-menu') ownerMenu: Array<Object>;

    @Input() editTopic: Observable<string>;

    editing: boolean = false;

    oldValues: any;

    constructor(public session: UserSessionService,
                private publish: PublishService,
                private api: ApiService) {}

    ngOnInit() {
        this.publish.publish$
            .filter(res => res.type === "edit")
            .filter(res => res.uuid === this.card.uuid)
            .subscribe(
                res => {
                    this.startEditing();
                }
            );
    }

    startEditing() {
        this.editing = true;
        this.oldValues = {
            title: this.card.title,
            description: this.card.description
        };
    }

    saveEdition() {
        const value = {
            title: this.card.title,
            description: this.card.description
        };
        this.api.ideas.update(this.card.uuid, value).subscribe(
            res => this.editing = false
        );
    }

    cancelEdition() {
        this.editing = false;
        this.card.title = this.oldValues.title;
        this.card.description = this.oldValues.description;
    }

    addUser(user) {
        this.api.ideas.invite(this.card.uuid, user.username).subscribe(
            result => this.card.users.push(user),
            err => console.error(err)
        )
    }
}
