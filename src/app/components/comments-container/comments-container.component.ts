import { Component, Input } from '@angular/core';

import { CommentComponent } from '../comment/comment.component';

import { KeysFilter } from '../../pipes';

const BASE_DIR = './app/components/comments-container';

@Component({
    selector: 'comments-container',
    templateUrl: `${BASE_DIR}/comments-container.component.html`,
    styleUrls: [`${BASE_DIR}/comments-container.component.css`],
    pipes: [KeysFilter],
    directives: [CommentComponent]
})

export class CommentsContainerComponent {
    @Input() comments: number;
    @Input() reactions: any;

    ngOnInit() {
        console.log('CommentsContainerComponent');
        console.log(this.reactions);
    }
}
