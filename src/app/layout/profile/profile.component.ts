import {Component} from "@angular/core";

import { ApiService } from "../../services/api.service";
import { AvatarEditorComponent } from "../../components/avatar-editor/avatar-editor.component";
import { ColorPickerComponent } from "../../components/color-picker/color-picker.component";
import { UserSessionService } from "../../services/user-session.service";

@Component({
    selector: "profile-layout",
    templateUrl: "./app/layout/profile/profile.component.html",
    styleUrls: ["./app/layout/profile/profile.component.css"],
    directives: [AvatarEditorComponent, ColorPickerComponent]
})

export class ProfileComponent {
    user: any = {};
    userId: string;

    constructor(public session: UserSessionService, public api: ApiService) {
        if (!Object.keys(session).length) {
            return;
        }

        this.userId = session.currentUser.username;

        this.user = {
            email: session.currentUser.email,
            fullName: session.currentUser.fullName,
            avatar: session.currentUser.avatar
        };
    }

    onUpdateUser() {
        this.api.users.update(this.userId, this.user).subscribe(
            user => this.session.store(user),
            err => console.log('err', err)
        );
    }
}
