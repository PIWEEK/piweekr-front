import { Component, Input } from '@angular/core';

const BASE_DIR = './app/components/owner';

@Component({
    selector: 'owner',
    templateUrl: `${BASE_DIR}/owner.component.html`,
    styleUrls: [`${BASE_DIR}/owner.component.css`]
})

export class OwnerComponent {
    @Input() owner: Object;

    ngOnInit() {
        console.log('OwnerComponent');
    }
}
