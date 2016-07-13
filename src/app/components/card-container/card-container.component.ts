import { Component, Input, ElementRef } from '@angular/core';

import { CardComponent } from '../../components/card/card.component';
import { CardFormComponent } from '../../components/card-form/card-form.component';

const BASE_DIR = './app/components/card-container/';

@Component({
    selector: "card-container",
    templateUrl: `${BASE_DIR}/card-container.component.html`,
    styleUrls: [`${BASE_DIR}/card-container.component.css`],
    directives: [CardComponent, CardFormComponent]
})

export class CardContainerComponent {
    @Input() type: string;
    @Input('items') itemsList: any;
    @Input() selectedItem: string;
    @Input('owner-menu') ownerMenu: Array<Object>;
    private headerHeight: number = 120;

    constructor(private window: Window, private elementRef: ElementRef) {}

    ngOnChanges() {
        if (this.selectedItem) {
            this.goToCard(this.selectedItem);
        }
    }

    private goToCard(id: string) {
        let ELEMENT = this.elementRef.nativeElement;
        ELEMENT = ELEMENT.querySelector(`[data-card-id="${id}"]`);

        window.scrollTo(0, ELEMENT.getBoundingClientRect().top - this.headerHeight);
    }
    isItemFormVisible = false;
    addNewItem() {
        this.isItemFormVisible = true;
    }
}
