import { Component, Input, Output, EventEmitter } from '@angular/core';

const BASE_DIR = './app/components/color-picker';

@Component({
    selector: 'color-picker',
    templateUrl: `${BASE_DIR}/color-picker.component.html`,
    styleUrls: [`${BASE_DIR}/color-picker.component.css`]
})

export class ColorPickerComponent {
    @Input() color: string;
    @Output() colorChange: EventEmitter<any> = new EventEmitter();

    colors: Array<string>;

    constructor() {
        this.colors = [
            'rgb(153, 153, 153)',
            'rgb(255, 138, 132)',
            'rgb(32, 74, 135)',
            'rgb(102, 153, 0)',
            'rgb(239, 41, 41)',
        ];
    }

    changeColour(selected: string) {
        console.log(selected);
        this.colorChange.emit(selected);
    }
}
