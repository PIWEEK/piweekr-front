import {Component} from "@angular/core";
import {OnInit} from "@angular/core";

@Component({
    selector: "about",
    templateUrl: "./app/components/about/about.component.html",
    styleUrls: ["./app/components/about/about.component.css"]
})

export class AboutComponent implements OnInit {
    ngOnInit() {
        console.log("AboutComponent initialized ...");
    }
}
