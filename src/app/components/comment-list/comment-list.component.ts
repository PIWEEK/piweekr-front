import {Component, Input} from "@angular/core";

import {CommentInputComponent} from "../comment-input/comment-input.component";
import {CommentComponent} from "../comment/comment.component";

import {Comment} from "../../model/comment";
import {ApiService} from "../../services/api.service";

const BASE_DIR = './app/components/comment-list';

@Component({
    selector: "comment-list",
    templateUrl: `${BASE_DIR}/comment-list.component.html`,
    styleUrls: [`${BASE_DIR}/comment-list.component.css`],
    directives: [CommentComponent]
})
export class CommentListComponent {
    @Input() uuid: string;
    @Input() entity: string;

    comments: Comment[];

    constructor(private api: ApiService) {}

    ngOnInit() {
        console.log(">>> ngOnInit: " + this.entity);
        this.api
            .comments
            .list(this.entity, this.uuid)
            .subscribe(
                comments => this.comments = comments,
                err => console.log(">>> ERROR", err)
            );
    }

    addComment(comment) {
        this.comments.push(comment);
    }
}
