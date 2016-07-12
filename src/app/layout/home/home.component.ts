import {Component, OnInit} from "@angular/core";
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {CounterBackComponent} from "../../components/counterback/counterback.component";

import moment from 'moment';

@Component({
    selector: "home-layout",
    templateUrl: "./app/layout/home/home.component.html",
    styleUrls: ["./app/layout/home/home.component.css"],
    directives: [NavbarComponent, CounterBackComponent]
})

export class HomeComponent {
    constructor() {
        console.log(moment().format());
    }
}
