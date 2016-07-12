import { Component, Input } from '@angular/core';

const BASE_DIR = './app/components/comment';

@Component({
    selector: 'comment',
    templateUrl: `${BASE_DIR}/comment.component.html`,
    styleUrls: [`${BASE_DIR}/comment.component.css`]
})

export class CommentComponent {
    @Input() comment: Object;

    ngOnInit() {
        console.log('CommentComponent');
    }
}
