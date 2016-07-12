import {Component, OnInit} from "@angular/core";
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {AboutComponent} from "../../components/about/about.component";
import {CounterBackComponent} from "../../components/counterback/counterback.component";

@Component({
    selector: "home-layout",
    templateUrl: "./app/layout/home/home.component.html",
    styleUrls: ["./app/layout/home/home.component.css"],
    directives: [NavbarComponent, AboutComponent, CounterBackComponent]
})

export class HomeComponent {
}
