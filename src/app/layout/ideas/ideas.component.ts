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
    @Input() selectedItem: Object;

    type: string = 'Ideas';
    items = [];
    ownerMenu: Array<Object>;

    constructor(private _api: ApiService) {

        this.ownerMenu = [
            {
                name: 'Borrar',
                action: this.deleteAction
            },
            {
                name: 'Editar',
                action: this.editAction
            },
            {
                name: 'Invitar',
                action: this.inviteAction
            },
            {
                name: 'Promocionar',
                action: this.promoteAction
            }
        ];
    }

    ngOnInit() {
        console.log(">> Retrieving ideas");
        this._api.ideas.list().subscribe(
            ideas => {
                console.log(">> Return OK", ideas);
                this.items = ideas;
            },
            err => console.log(err)
        );
    }

    handleSelected(item: string) {
        this.selectedItem = item;
    };

    private deleteAction(id: string) {
        console.log('deleteAction');
        console.log('id', id);
    }

    private editAction(id: string) {
        console.log('editAction');
        console.log('id', id);
    }

    private inviteAction(id: string) {
        console.log('inviteAction');
        console.log('id', id);
    }

    private promoteAction(id: string) {
        console.log('promoteAction');
        console.log('id', id);
    }
}
