import { Component, EventEmitter, Input, Output} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: "vertical-list",
    templateUrl: "./app/components/vertical-list/vertical-list.component.html",
    styleUrls: ["./app/components/vertical-list/vertical-list.component.css"],
    directives: [ ROUTER_DIRECTIVES ]
})

export class VerticalListComponent {
    @Input('items') itemsList: any;
    @Input() type: string;
    @Output() currentItem = new EventEmitter<string>();

    selectedItem;

    onSelectItem(item: string) {
        this.selectedItem = item;
        this.currentItem.emit(item);
    }
}
