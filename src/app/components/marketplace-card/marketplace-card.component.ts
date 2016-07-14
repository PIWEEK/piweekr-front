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
    constructor(
        private session: UserSessionService,
        private api: ApiService
    ) {}
    isCurrentUserInProject() {
        if (this.session.currentUser) {
            let isOwner = this.card.owner.username === this.session.currentUser.username;
            let isInProject = this.card.usersInterested.some(it => this.session.currentUser.username === it.username);
            if (isInProject && !isOwner) {
                return true;
            }
            return false;
        }
        return false;
    }
    isCurrentUserNotInProject() {
        if (this.session.currentUser) {
            let isOwner = this.card.owner.username === this.session.currentUser.username;
            let isInProject = this.card.usersInterested.some(it => this.session.currentUser.username === it.username);
            if (!isInProject && !isOwner) {
                return true;
            }
            return false;
        }
        return false;
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
