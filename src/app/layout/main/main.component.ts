import {Component} from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
    selector: "main",
    templateUrl: "./app/layout/main/main.component.html",
    directives: [ ROUTER_DIRECTIVES, NavbarComponent ]
})
export class MainComponent {
}
