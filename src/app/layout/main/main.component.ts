import {Component} from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ApiService } from "../../services/api.service";
import { PRECOMPILE_ARRAY } from "../../router/app.routes";
import {User} from "../../model/user";

@Component({
    selector: "main",
    templateUrl: "./app/layout/main/main.component.html",
    styleUrls: ["./app/layout/main/main.component.css"],
    directives: [ ROUTER_DIRECTIVES, NavbarComponent ],
    precompile: [ PRECOMPILE_ARRAY ]
})
export class MainComponent {
    ngOnInit() {
        console.log(">> Starting main app");
    }
}
