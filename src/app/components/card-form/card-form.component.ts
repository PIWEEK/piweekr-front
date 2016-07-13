import { Component, Input } from '@angular/core';

const BASE_DIR = './app/components/card-form';

@Component({
    selector: 'card-form',
    templateUrl: `${BASE_DIR}/card-form.component.html`,
    styleUrls: [`${BASE_DIR}/card-form.component.css`],
    directives: []
})

export class CardFormComponent {
    @Input() type: string;
}
