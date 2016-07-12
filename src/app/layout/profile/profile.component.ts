import {Component} from "@angular/core";
import {AvatarEditorComponent} from "../../components/avatar-editor/avatar-editor.component";

@Component({
    selector: "profile-layout",
    templateUrl: "./app/layout/profile/profile.component.html",
    styleUrls: ["./app/layout/profile/profile.component.css"],
    directives: [AvatarEditorComponent]
})

export class ProfileComponent {
}
