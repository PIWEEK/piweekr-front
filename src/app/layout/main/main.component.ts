import {Component} from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ApiService } from "../../services/api.service";

import {User} from "../../model/user";

@Component({
    selector: "main",
    templateUrl: "./app/layout/main/main.component.html",
    directives: [ ROUTER_DIRECTIVES, NavbarComponent ]
})
export class MainComponent {
    ngOnInit() {
        console.log(">> Starting main app");
    }

    constructor(private _api: ApiService) {
        // Sample usage:
        this._api.users.list().subscribe(
            users => console.log("USERS: ", users),
            err => console.log(err)
        );

        this._api.ideas.list().subscribe(
            ideas => console.log("IDEAS: ", ideas),
            err => console.log(err)
        );
    }
}
