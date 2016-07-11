import {Component} from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: "nav-bar",
    templateUrl: "./app/components/navbar/navbar.component.html",
    styleUrls: ["./app/components/navbar/navbar.component.css"],
    directives: [ ROUTER_DIRECTIVES ]
})

export class NavbarComponent {
}
