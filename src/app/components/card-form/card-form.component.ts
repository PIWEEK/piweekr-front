import { Component, Input, Output, EventEmitter } from '@angular/core';
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
    @Output() onCardClosed: EventEmitter<any> = new EventEmitter();
    @Output() onCardCreated: EventEmitter<any> = new EventEmitter();

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
        this.api.ideas.create(this.idea).subscribe(
            idea => {
                this.onCardCreated.emit(idea);
            },
            err => console.log(">> ERR ", err)
        );
    }

    isInvited(user: User): boolean {
        return this.invitedUsers.find(u => u.username === user.username) !== undefined;
    }

    closeAddItemForm() {
        this.onCardClosed.emit(null);
    }
}
