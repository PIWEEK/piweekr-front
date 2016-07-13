import { Component, Input } from '@angular/core';
import { Comment } from "../../model/comment";
import { AvatarEditorComponent } from "../avatar-editor/avatar-editor.component";

const BASE_DIR = './app/components/comment';

@Component({
    selector: 'comment',
    templateUrl: `${BASE_DIR}/comment.component.html`,
    styleUrls: [`${BASE_DIR}/comment.component.css`],
    directives: [AvatarEditorComponent]
})

export class CommentComponent {
    @Input() comment: Comment = new Comment({
        uuid: "aaaaa",
        owner: {
            username: "alotor",
            email: "fake@gmail.com",
            fullName: "Fake User",
            avatar: {
                head: 1, body: 2, legs: 3, background: "#FF0000"
            }
        },
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
           do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
           enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
           ut aliquip ex ea commodo consequat. Duis aute irure dolor in
           reprehenderit in voluptate velit esse cillum`
    });

}
