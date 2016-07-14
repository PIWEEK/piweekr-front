import {Component} from "@angular/core";
import { ApiService } from "../../services/api.service";
import { AvatarEditorComponent } from "../../components/avatar-editor/avatar-editor.component";

@Component({
    selector: "marketplace-layout",
    templateUrl: "./app/layout/marketplace/marketplace.component.html",
    styleUrls: ["./app/layout/marketplace/marketplace.component.css"],
    directives: [AvatarEditorComponent]
})

export class MarketplaceComponent {
    constructor(
        private _api: ApiService
    ) {}
    items = [];
    ngOnInit() {
        this._api.projects.list().subscribe(
            projects => {
                this.items = projects;
                console.log(this.items);
            },
            err => console.log(err)
        );
    }
}
