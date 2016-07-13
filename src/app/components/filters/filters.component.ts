import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgSelectOption } from '@angular/common';

const BASE_DIR = './app/components/filters/';

@Component({
    selector: 'filters',
    templateUrl: `${BASE_DIR}/filters.component.html`,
    styleUrls: [`${BASE_DIR}/filters.component.css`],
    directives: [NgSelectOption]
})

export class FiltersComponent {
    private isForked: Array<Object>;
    private isPublic: Array<Object>;

    @Output() filtersChange = new EventEmitter<Object>();

    public selected: Object;

    constructor() {
        this.selected = {
            isForked: undefined,
            isPublic: false
        };

        this.isForked = [
            {
                key: true,
                value: 'Sí'
            },
            {
                key: undefined,
                value: 'No'
            }
        ];

        this.isPublic = [
            {
                key: true,
                value: 'Sí'
            },
            {
                key: false,
                value: 'No'
            }
        ];
    }

    modelChange() {
        this.filtersChange.emit(this.selected);
    }
}
