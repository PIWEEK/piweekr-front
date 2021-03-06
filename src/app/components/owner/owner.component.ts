import { Component, Input } from '@angular/core';

import { AvatarEditorComponent } from "../avatar-editor/avatar-editor.component";


const BASE_DIR = './app/components/owner';

@Component({
    selector: 'owner',
    templateUrl: `${BASE_DIR}/owner.component.html`,
    styleUrls: [`${BASE_DIR}/owner.component.css`],
    directives: [AvatarEditorComponent]
})

export class OwnerComponent {
    @Input() owner: Object;
    @Input('owner-options') options: Object;
    @Input('card-id') cardId: string;

    isMenuVisible: boolean = false;

    ngOnChanges() {
        this.options = this.options || [];
    }

    toggleMenu(event) {
        this.isMenuVisible = !this.isMenuVisible;
    }

    closeMenu(event) {
        this.isMenuVisible = false;
    }
}
