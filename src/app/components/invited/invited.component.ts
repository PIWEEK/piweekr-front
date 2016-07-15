import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserListComponent } from "../user-list/user-list.component";
import { AvatarEditorComponent } from "../avatar-editor/avatar-editor.component";
import { UserAutocompleteComponent } from "../user-autocomplete/user-autocomplete.component";

const BASE_DIR = './app/components/invited';

@Component({
    selector: 'invited',
    templateUrl: `${BASE_DIR}/invited.component.html`,
    styleUrls: [`${BASE_DIR}/invited.component.css`],
    directives: [UserListComponent, AvatarEditorComponent, UserAutocompleteComponent]
})

export class InvitedComponent {
    @Input() inviteds: Array<Object>;
    @Output() onSelectUser: EventEmitter<any> = new EventEmitter<any>();
    editing: boolean = false;

    ngOnChanges() {
        this.inviteds = this.inviteds || [];
    }

    addUser(user) {
        this.onSelectUser.emit(user);
        this.editing = false;
    }

    startEditing() {
        this.editing = true;
    }
}
