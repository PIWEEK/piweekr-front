import {Component} from "@angular/core";
import {VerticalListComponent} from "../../components/vertical-list/vertical-list.component";

@Component({
    selector: "ideas-layout",
    templateUrl: "./app/layout/ideas/ideas.component.html",
    styleUrls: ["./app/layout/ideas/ideas.component.css"],
    directives: [VerticalListComponent]
})

export class IdeasComponent {
}
