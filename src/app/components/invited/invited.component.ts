import { Component, Input } from '@angular/core';
import { UserListComponent } from "../user-list/user-list.component";
import { AvatarEditorComponent } from "../avatar-editor/avatar-editor.component";

const BASE_DIR = './app/components/invited';

@Component({
    selector: 'invited',
    templateUrl: `${BASE_DIR}/invited.component.html`,
    styleUrls: [`${BASE_DIR}/invited.component.css`],
    directives: [UserListComponent, AvatarEditorComponent]
})

export class InvitedComponent {
    @Input() inviteds: Array<Object>;

    ngOnChanges() {
        this.inviteds = this.inviteds || [];
    }
}
