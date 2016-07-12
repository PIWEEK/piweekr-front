import { Component, Input } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';

const BASE_DIR = './app/components/card-container/';

@Component({
    selector: "card-container",
    templateUrl: `${BASE_DIR}/card-container.component.html`,
    styleUrls: [`${BASE_DIR}/card-container.component.css`],
    directives: [CardComponent]
})

export class CardContainerComponent {
    @Input('items') itemsList: any;
    @Input() selectedItem: string;
    @Input('owner-menu') ownerMenu: Array<Object>;

    ngOnInit() {
        console.log('this.ownerMenu', this.ownerMenu);
    }
}
