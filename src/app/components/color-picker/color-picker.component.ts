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
        this.colors = ["#FC8EAC", "#A5694F", "#002e33", "#67CF00",
            "#71A6D2", "#FFF8E7", "#4B0082", "#007000", "#40826D",
            "#708090", "#761CEC", "#CC0000",
            "#FFCC00", "#FFFF00", "#B6DA55", "#2099DB"
        ];
    }

    changeColour(selected: string) {
        console.log(selected);
        this.colorChange.emit(selected);
    }
}
