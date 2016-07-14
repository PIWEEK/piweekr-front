import { Component, Input, ElementRef } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

import { CardComponent } from '../../components/card/card.component';
import { CardFormComponent } from '../../components/card-form/card-form.component';
import { FiltersComponent } from '../../components/filters/filters.component';
import { PublishService } from '../../services/publish.service';

const BASE_DIR = './app/components/card-container/';

@Component({
    selector: "card-container",
    templateUrl: `${BASE_DIR}/card-container.component.html`,
    styleUrls: [`${BASE_DIR}/card-container.component.css`],
    directives: [CardComponent, CardFormComponent, FiltersComponent],
    providers: [PublishService]
})

export class CardContainerComponent {
    @Input() entity: string;
    @Input() type: string;
    @Input('items') itemsList: any;
    @Input() selectedItem: string;
    @Input('owner-menu') ownerMenu: Array<Object>;

    private headerHeight: number = 120;
    private filterOptions: Array<Object>;
    isItemFormVisible = false;
    subscription: Subscription;

    constructor(private window: Window, private elementRef: ElementRef, public publishService: PublishService) {
        this.publishService.publish$.subscribe(this.filtersChange);
    }

    ngOnChanges() {
        if (this.selectedItem) {
            this.goToCard(this.selectedItem);
        }
    }

    private goToCard(id: string) {
        let ELEMENT = this.elementRef.nativeElement;
        ELEMENT = ELEMENT.querySelector(`[data-card-id="${id}"]`);

        let newPosition = window.scrollY + ELEMENT.getBoundingClientRect().top;
        newPosition -= this.headerHeight;

        window.scrollTo(0, newPosition);
    }

    addNewItem() {
        this.isItemFormVisible = true;
    }

    filtersChange(newFilters) {
        console.log('todo ooook', newFilters);
    }
}
