import { Component, Input } from '@angular/core';

@Component({
    selector: "card-container",
    templateUrl: "./app/components/card-container/card-container.component.html",
    styleUrls: ["./app/components/card-container/card-container.component.css"]
})

export class CardContainerComponent {
    @Input('items') itemsList: any;
    @Input() selectedItem: string;
}
