import {Component} from "@angular/core";
import {AvatarEditorComponent} from "../../components/avatar-editor/avatar-editor.component";
import {User} from "../../model/user";

@Component({
    selector: "profile-layout",
    templateUrl: "./app/layout/profile/profile.component.html",
    styleUrls: ["./app/layout/profile/profile.component.css"],
    directives: [AvatarEditorComponent]
})

export class ProfileComponent {
    currentUser: User = new User({
        userName: "Alotor",
        fullName: "Alonso Torres",
        email: "alotor@gmail.com",
        avatar: {
            head: 6,
            body: 6,
            legs: 6,
            background: "#FFFF00"
        }
    });
}
