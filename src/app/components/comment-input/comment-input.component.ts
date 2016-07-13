import {Component, Input} from "@angular/core";
import {ApiService} from "../../services/api.service";
import {Comment} from "../../model/comment";
import {AvatarEditorComponent} from "../../components/avatar-editor/avatar-editor.component";
import { UserSessionService } from "../../services/user-session.service";

const BASE_DIR = './app/components/comment-input';

@Component({
    selector: "comment-input",
    templateUrl: `${BASE_DIR}/comment-input.component.html`,
    styleUrls: [`${BASE_DIR}/comment-input.component.css`],
    directives: [AvatarEditorComponent]
})
export class CommentInputComponent {
    @Input() entity: string;
    @Input() uuid: string;

    comment: string = '';

    constructor(private api: ApiService,
                private session: UserSessionService) {}

    onSubmit() {
        const model: Comment = new Comment({
            content: this.comment,
            owner: this.session.currentUser
        });

        this.api.comments
            .create(this.entity, this.uuid, model)
            .subscribe(
                comment => console.log("OK", comment),
                err => console.log("ERR", err)
            );
    }
}
