import {Component} from "@angular/core";
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {AboutComponent} from "../../components/about/about.component";
import {CountDownComponent} from "../../components/countdown/countdown.component";

import moment from 'moment';

@Component({
    selector: "home-layout",
    templateUrl: "./app/layout/home/home.component.html",
    styleUrls: ["./app/layout/home/home.component.css"],
    directives: [NavbarComponent, CountDownComponent]
})

export class HomeComponent {
}
