import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: "vertical-list",
    templateUrl: "./app/components/vertical-list/vertical-list.component.html",
    styleUrls: ["./app/components/vertical-list/vertical-list.component.css"]
})

export class VerticalListComponent {
    @Input('items') itemsList: any;
    @Output() currentItem = new EventEmitter<string>();
    onSelectItem(item: string) {
        console.log (item);
        this.currentItem.emit(item);
    }
}
