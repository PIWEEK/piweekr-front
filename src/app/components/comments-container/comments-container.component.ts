import { Component, Input } from '@angular/core';
import { CommentListComponent } from '../comment-list/comment-list.component';
import { CommentInputComponent } from '../comment-input/comment-input.component';
import { KeysFilter } from '../../pipes';

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

    showComments: boolean = false;

    handleShowComments() {
        this.showComments = true;
    }
}
