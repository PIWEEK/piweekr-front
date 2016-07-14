import { Component, Output, EventEmitter } from '@angular/core';

const BASE_DIR = './app/components/reaction-button';

@Component({
    selector: 'reaction-button',
    templateUrl: `${BASE_DIR}/reaction-button.component.html`,
    styleUrls: [`${BASE_DIR}/reaction-button.component.css`]
})

export class ReactionsButtonComponent {
    @Output() onReactionSelected: EventEmitter<string> = new EventEmitter<string>();

    select(emoji: string) {
        this.onReactionSelected.emit(emoji);
    }
}

