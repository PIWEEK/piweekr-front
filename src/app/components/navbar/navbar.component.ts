import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AvatarEditorComponent } from "../../components/avatar-editor/avatar-editor.component";
import { User } from "../../model/user";

@Component({
    selector: "nav-bar",
    templateUrl: "./app/components/navbar/navbar.component.html",
    styleUrls: ["./app/components/navbar/navbar.component.css"],
    directives: [ ROUTER_DIRECTIVES, AvatarEditorComponent ]
})

export class NavbarComponent {
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
