import {Component, Input} from "@angular/core";
import { ApiService } from "../../services/api.service";
import { PublishService } from '../../services/publish.service';
import {VerticalListComponent} from "../../components/vertical-list/vertical-list.component";
import {CardContainerComponent} from "../../components/card-container/card-container.component";

@Component({
    selector: "projects-layout",
    templateUrl: "./app/layout/projects/projects.component.html",
    styleUrls: ["./app/layout/projects/projects.component.css"],
    directives: [VerticalListComponent, CardContainerComponent],
    providers: [PublishService]
})

export class ProjectsComponent {
    @Input() selectedItem: any;

    type: string = 'Projects';
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
        this._api.projects.list().subscribe(
            projects => {
                this.items = projects;
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
