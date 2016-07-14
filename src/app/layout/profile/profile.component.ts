import {Component} from "@angular/core";
import {AvatarEditorComponent} from "../../components/avatar-editor/avatar-editor.component";
import { UserSessionService } from "../../services/user-session.service";

@Component({
    selector: "profile-layout",
    templateUrl: "./app/layout/profile/profile.component.html",
    styleUrls: ["./app/layout/profile/profile.component.css"],
    directives: [AvatarEditorComponent]
})

export class ProfileComponent {
    user: Object = {};

    constructor(public session: UserSessionService) {
        console.log('session', session);
        if (!Object.keys(session).length) {
            return;
        }

        this.user = {
            email: session.currentUser.email,
            fullName: session.currentUser.fullName
        };
    }

    onUpdateUser() {
        console.log('onUpdateUser');
    }
}
