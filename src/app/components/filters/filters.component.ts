import { Component, Input } from '@angular/core';
import { NgSelectOption } from '@angular/common';
import { PublishService } from '../../services/publish.service';

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

    public selected: Object;

    constructor(public publishService: PublishService) {
        this.selected = {
            title: '',
            isForked: null,
            isPublic: null
        };

        this.isForked = [
            {
                key: null,
                value: 'All'
            },
            {
                key: true,
                value: 'Sí'
            },
            {
                key: false,
                value: 'No'
            }
        ];

        this.isPublic = [
            {
                key: null,
                value: 'All'
            },
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
        this.publishService.publish({
            type: "filter",
            item: this.selected
        });
    }
}
