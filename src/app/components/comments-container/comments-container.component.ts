import { Component, Input, ViewChild } from '@angular/core';
import { CommentListComponent } from '../comment-list/comment-list.component';
import { CommentInputComponent } from '../comment-input/comment-input.component';
import { ReactionsButtonComponent } from '../reaction-button/reaction-button.component';
import { KeysFilter } from '../../pipes';
import { UserSessionService } from "../../services/user-session.service";
import { ApiService } from "../../services/api.service";

const BASE_DIR = './app/components/comments-container';

@Component({
    selector: 'comments-container',
    templateUrl: `${BASE_DIR}/comments-container.component.html`,
    styleUrls: [`${BASE_DIR}/comments-container.component.css`],
    pipes: [KeysFilter],
    directives: [CommentListComponent, CommentInputComponent, ReactionsButtonComponent]
})

export class CommentsContainerComponent {
    @Input() uuid: string;
    @Input() entity: string;
    @Input() comments: number;
    @Input() reactions: Object = {};

    @ViewChild(CommentListComponent)
    private commentList: CommentListComponent;

    showComments: boolean = false;

    constructor(private session: UserSessionService,
                private api: ApiService) {}

    handleToggleComments() {
        this.showComments = !this.showComments;
    }

    handleCommentCreated(comment) {
        this.commentList.addComment(comment);
    }

    handleReactionSelected(reaction: string) {
        this.api.comments.addReaction(this.entity, this.uuid, reaction).subscribe(
            result => {
                if (this.reactions[reaction]) {
                    this.reactions[reaction] += 1;
                } else {
                    this.reactions[reaction] = 1;
                }
            },
            err => console.log(">>> ERR", err)
        );

    }
}
