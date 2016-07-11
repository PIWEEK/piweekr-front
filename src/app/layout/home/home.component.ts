import {Component, OnInit} from "@angular/core";
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {AboutComponent} from "../../components/about/about.component";

@Component({
    selector: "home-layout",
    templateUrl: "./app/layout/home/home.component.html",
    styleUrls: ["./app/layout/home/home.component.css"],
    directives: [NavbarComponent, AboutComponent]
})

export class HomeComponent {
}
