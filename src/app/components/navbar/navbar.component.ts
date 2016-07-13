import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';
import { UserSessionService } from "../../services/user-session.service";
import {LoginFormComponent} from "../../components/login/login-form.component";
import { Title } from '@angular/platform-browser';

@Component({
    selector: "nav-bar",
    templateUrl: "./app/components/navbar/navbar.component.html",
    styleUrls: ["./app/components/navbar/navbar.component.css"],
    directives: [ROUTER_DIRECTIVES, LoginFormComponent]
})

export class NavbarComponent {
    isLoginVisible = false;
    constructor(
        public session: UserSessionService,
        private titleService: Title
    ) { }
    public setTitle( newTitle: string) {
        this.titleService.setTitle( newTitle );
    }
    displayLogin() {
        this.isLoginVisible = true;
    };
    handleCloseLogin() {
        this.isLoginVisible = false;
    };
}
