import {Component} from "@angular/core";
import {OnInit} from "@angular/core";

@Component({
    selector: "nav-bar",
    templateUrl: "./app/components/navbar/navbar.component.html",
    styleUrls: ["./app/components/navbar/navbar.component.css"]
})

export class NavbarComponent implements OnInit {
    ngOnInit() {
        console.log("Nav bar initialized ...");
    }
}
