import { Component, Input } from '@angular/core';
import { UserListComponent } from "../../components/user-list/user-list.component";
import { AvatarEditorComponent } from "../../components/avatar-editor/avatar-editor.component";
import { UserSessionService } from "../../services/user-session.service";
import { ApiService } from "../../services/api.service";

const BASE_DIR = './app/components/marketplace-card/';

@Component({
    selector: "marketplace-card",
    templateUrl: `${BASE_DIR}/marketplace-card.component.html`,
    styleUrls: [`${BASE_DIR}/marketplace-card.component.css`],
    directives: [UserListComponent, AvatarEditorComponent]
})

export class MarketplaceCardComponent {
    @Input() card: any;
    isInterested: boolean;
    isParticipant: boolean;
    isOwner: boolean;
    isUserLoggedIn: boolean;
    constructor(
        private session: UserSessionService,
        private api: ApiService
    ) {
    }

    ngOnInit() {
        if (this.session.currentUser) {
            this.isUserLoggedIn = true;
            this.isInterested = this.card.usersInterested.some(it => this.session.currentUser.username === it.username);
            this.isParticipant = this.card.usersParticipant.some(it => this.session.currentUser.username === it.username);
            this.isOwner = this.card.owner.username === this.session.currentUser.username;
        }
    }

    joinProject() {
        this.api.projects.join(this.card.uuid).subscribe(
            result => {
                console.log(result);
            },
            err => console.log(">> ERR ", err)
        );
    }
}
