import { Component, Input } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { Observable } from 'rxjs/Observable';
import { AvatarEditorComponent } from "../avatar-editor/avatar-editor.component";
import { User } from "../../model/user";


const BASE_DIR = './app/components/card-form';

@Component({
    selector: 'card-form',
    templateUrl: `${BASE_DIR}/card-form.component.html`,
    styleUrls: [`${BASE_DIR}/card-form.component.css`],
    directives: [AvatarEditorComponent]
})

export class CardFormComponent {
    @Input() type: string;
    constructor(private api: ApiService) {}
    inviteUser: any;
    filteredUsers: any;
    invitedUsers: any = [];
    displayUserInviteList: boolean = false;
    userList: Observable<User[]>;
    idea: any = {};
    ngOnInit() {
        this.userList = this.api.users.list();
        console.log(this.userList);
    }
    doStuff() {
        this.displayUserInviteList = true;
        if (this.inviteUser.length > 3) {
            this.userList
                .flatMap(users => Observable.of(...users))
                // .filter( user => user.fullName.toLowerCase().includes(this.invitedUsers.fullName.toLowerCase()))
                .filter( user => user.fullName.toLowerCase().includes(this.inviteUser.toLowerCase()))
                .take(5)
                .toArray()
                .subscribe(
                    users => this.filteredUsers = users,
                    err => console.log(">> ERROR", err)
                );
        }
    }
    onInviteUser(user) {
        this.displayUserInviteList = false;
        this.invitedUsers.push(user);
        this.inviteUser = '';
    }
    onRemoveUser(user) {
        let index = this.invitedUsers.indexOf(user);
        this.invitedUsers.splice(index, 1);
    }
    onCreateNewItem() {
        this.idea.users = this.invitedUsers;
        console.log(this.idea);
    }
}
