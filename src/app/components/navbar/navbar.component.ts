import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AvatarEditorComponent } from "../../components/avatar-editor/avatar-editor.component";
import { UserSessionService } from "../../services/user-session.service";

@Component({
    selector: "nav-bar",
    templateUrl: "./app/components/navbar/navbar.component.html",
    styleUrls: ["./app/components/navbar/navbar.component.css"],
    directives: [ ROUTER_DIRECTIVES, AvatarEditorComponent ]
})

export class NavbarComponent {
    constructor(public session: UserSessionService) {}
}
