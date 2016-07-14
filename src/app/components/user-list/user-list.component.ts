import { Component, Input } from '@angular/core';
import { AvatarEditorComponent } from "../../components/avatar-editor/avatar-editor.component";

const BASE_DIR = './app/components/user-list/';

@Component({
    selector: "user-list",
    templateUrl: `${BASE_DIR}/user-list.component.html`,
    styleUrls: [`${BASE_DIR}/user-list.component.css`],
    directives: [AvatarEditorComponent]
})

export class UserListComponent {
    @Input() users: Object;
}
