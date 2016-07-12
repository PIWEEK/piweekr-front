import {Component, Input} from "@angular/core";
import { ApiService } from "../../services/api.service";
import {VerticalListComponent} from "../../components/vertical-list/vertical-list.component";
import {CardContainerComponent} from "../../components/card-container/card-container.component";

@Component({
    selector: "ideas-layout",
    templateUrl: "./app/layout/ideas/ideas.component.html",
    styleUrls: ["./app/layout/ideas/ideas.component.css"],
    directives: [VerticalListComponent, CardContainerComponent]
})

export class IdeasComponent {
    @Input() selectedItem: any;

    type: string = 'Ideas';
    items = [];

    constructor(private _api: ApiService) {
        this._api.ideas.list().subscribe( ideas =>
            this.items = ideas,
            err => console.log(err)
        );
    }

    handleSelected(item: string) {
        this.selectedItem = item;
    };
}
