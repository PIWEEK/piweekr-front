import { Component, Input } from "@angular/core";
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { ApiService } from "../../services/api.service";
import { PublishService } from '../../services/publish.service';
import { VerticalListComponent } from "../../components/vertical-list/vertical-list.component";
import { CardContainerComponent } from "../../components/card-container/card-container.component";

@Component({
    selector: "ideas-layout",
    templateUrl: "./app/layout/ideas/ideas.component.html",
    styleUrls: ["./app/layout/ideas/ideas.component.css"],
    directives: [VerticalListComponent, CardContainerComponent],
    providers: [PublishService, ApiService]
})

export class IdeasComponent {
    @Input() selectedItem: Object;

    type: string = 'Ideas';
    items = [];
    itemsOriginal = [];
    ownerMenu: Array<Object>;

    editSubject: Subject<string> = new Subject<string>();

    constructor(
        private _api: ApiService,
        public publishService: PublishService) {
        this.publishService.publish$
            .filter(p => p.type === "filter")
            .subscribe(p => this.filtersChange(p.item));

        this.ownerMenu = [
            {
                name: 'Borrar',
                action: this.deleteAction
            },
            {
                name: 'Editar',
                action: this.editAction.bind(this)
            },
            {
                name: 'Invitar',
                action: this.inviteAction
            },
            {
                name: 'Promocionar',
                action: this.promoteAction.bind(this)
            }
        ];
    }

    ngOnInit() {
        this._api.ideas
            .list()
            .flatMap(ideas => Observable.of(...ideas))
            .flatMap(
                idea => this._api.ideas
                    .fetchInvited(idea.uuid)
                    .catch(Observable.of([]))
                    .map(users => {
                        idea.users = users;
                        return idea;
                    })
                    )
            .toArray()
            .subscribe(
                ideas => {
                    console.log(ideas);
                    this.itemsOriginal = ideas;
                    // Fatest way to clone array
                    this.items = this.itemsOriginal.slice(0);
                },
                err => console.error(err)
            );
    }

    filtersChange(newFilters) {
        // Hack for cast "true" to true, and "false" to false
        const IS_PUBLIC = JSON.parse(newFilters.isPublic);
        const IS_FORKED = JSON.parse(newFilters.isForked);
        const TITLE = newFilters.title.toLowerCase();

        // Fatest way to clone array
        this.items = this.itemsOriginal.slice(0);

        if (newFilters.title) {
            let LOWER_CASE = undefined;
            this.items = this.items.filter(
                // Hack for cast "true" to true, and "false" to false
                it => {
                    LOWER_CASE = it.title.toLowerCase();
                    return LOWER_CASE.includes(TITLE);
                }
            );
        }

        if (IS_PUBLIC !== null) {
            this.items = this.items.filter(
                // Hack for cast "true" to true, and "false" to false
                it => it.isPublic === IS_PUBLIC
            );
        }

        if (IS_FORKED !== null) {
            this.items = this.items.filter(
                it => !!it.forkedFrom === IS_FORKED
            );
        }
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
        this.publishService.publish({
            type: "edit",
            uuid: id
        });
    }

    private inviteAction(id: string) {
        console.log('inviteAction');
        console.log('id', id);
    }

    private promoteAction(id: string) {
        console.log("API", this._api);
        this._api.ideas.promote(id).subscribe(
            result => console.log(result),
            err => console.log("err", err)
        );
    }
}
