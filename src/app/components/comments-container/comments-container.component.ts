import { Component, Input, ViewChild } from '@angular/core';
import { CommentListComponent } from '../comment-list/comment-list.component';
import { CommentInputComponent } from '../comment-input/comment-input.component';
import { KeysFilter } from '../../pipes';
import { UserSessionService } from "../../services/user-session.service";

const BASE_DIR = './app/components/comments-container';

@Component({
    selector: 'comments-container',
    templateUrl: `${BASE_DIR}/comments-container.component.html`,
    styleUrls: [`${BASE_DIR}/comments-container.component.css`],
    pipes: [KeysFilter],
    directives: [CommentListComponent, CommentInputComponent]
})

export class CommentsContainerComponent {
    @Input() uuid: string;
    @Input() entity: string;
    @Input() comments: number;
    @Input() reactions: Object = {};

    @ViewChild(CommentListComponent)
    private commentList: CommentListComponent;

    showComments: boolean = false;

    constructor(private session: UserSessionService) {}

    handleToggleComments() {
        this.showComments = !this.showComments;
    }

    handleCommentCreated(comment) {
        this.commentList.addComment(comment);
    }
}
