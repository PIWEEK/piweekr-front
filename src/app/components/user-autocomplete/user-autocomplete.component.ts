import { Component, Output, EventEmitter } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { User } from "../../model/user";
import { Observable } from 'rxjs/Observable';
import { AvatarEditorComponent } from "../avatar-editor/avatar-editor.component";

const BASE_DIR = './app/components/user-autocomplete';

@Component({
    selector: "user-autocomplete",
    templateUrl: `${BASE_DIR}/user-autocomplete.component.html`,
    styleUrls: [`${BASE_DIR}/user-autocomplete.component.css`],
    directives: [AvatarEditorComponent]
})
export class UserAutocompleteComponent {
    @Output() onSelectUser: EventEmitter<User> = new EventEmitter<User>();
    userList: Observable<User[]>;
    inviteUser: string;
    invitedUsers: any = [];
    filteredUsers: any;
    displayUserInviteList: any = [];

    constructor(private api: ApiService) {}

    ngOnInit() {
        this.userList = this.api.users.list();
    }

    onRemoveUser(user) {
        let index = this.invitedUsers.indexOf(user);
        this.invitedUsers.splice(index, 1);
    }

    onInviteUser(user) {
        this.displayUserInviteList = false;
        this.onSelectUser.emit(user);
        this.inviteUser = '';
    }

    isInvited(user: User): boolean {
        return this.invitedUsers.some(u => u.username === user.username);
    }

    doStuff() {
        if (this.inviteUser.length > 3) {
            this.displayUserInviteList = true;
            this.userList
                .flatMap(users => Observable.of(...users))
                .filter( user => user.fullName.toLowerCase().includes(this.inviteUser.toLowerCase()))
                .filter( user => !this.isInvited(user))
                .take(5)
                .toArray()
                .subscribe(
                    users => this.filteredUsers = users,
                    err => console.log(">> ERROR", err)
                );
        }
    }
}
