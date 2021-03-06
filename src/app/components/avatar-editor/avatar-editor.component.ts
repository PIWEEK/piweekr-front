import {Component, Input, Output, EventEmitter} from "@angular/core";
import {NgStyle} from '@angular/common';
import {Avatar} from '../../model/user';

const TOTAL_NO_HEADS = 23;
const TOTAL_NO_BODY = 23;
const TOTAL_NO_LEGS = 11;

@Component({
    selector: "avatar-editor",
    templateUrl: "./app/components/avatar-editor/avatar-editor.component.html",
    styleUrls:  ["./app/components/avatar-editor/avatar-editor.component.css"],
    inputs: ["head", "body", "leg", "editable"],
    directives: [NgStyle]
})
export class AvatarEditorComponent {
    @Input() head: number;
    @Input() body: number;
    @Input() leg: number;
    @Input() editable: boolean = true;
    @Input("avatar-type") avatarType: string;
    @Input() background: string;
    @Input() avatar: Avatar;

    @Output() headChange: EventEmitter<number> = new EventEmitter<number>();
    @Output() bodyChange: EventEmitter<number> = new EventEmitter<number>();
    @Output() legChange: EventEmitter<number> = new EventEmitter<number>();

    private headId = 1;
    private bodyId = 1;
    private legsId = 1;
    private styles = {};

    ngOnChanges() {
        if (this.avatar) {
            this.headId = this.avatar.head;
            this.bodyId = this.avatar.body;
            this.legsId = this.avatar.legs;
            this.background = this.avatar.background || "black";
        }

        this.headId = this.head || this.headId;
        this.bodyId = this.body || this.bodyId;
        this.legsId = this.leg || this.legsId;
        this.styles = {};
        this.styles["background-color"] = this.background || "transparent";
    }

    private incrementPart(part:number, increment:number, max:number) {
        const result: number = part + increment;

        if (result > max) {
            return 1;
        }
        if (result < 1) {
            return max;
        }

        return result;
    }

    changeElement(avatarPart, direction) {
        const select = [avatarPart, direction];

        const increment = (direction === 'left') ? -1 : 1;

        switch (avatarPart) {
            case 'head':
                this.headId = this.incrementPart(this.headId, increment, TOTAL_NO_HEADS);
                this.headChange.emit(this.headId);
                break;
            case 'body':
                this.bodyId = this.incrementPart(this.bodyId, increment, TOTAL_NO_BODY);
                this.bodyChange.emit(this.bodyId);
                break;
            case 'legs':
                this.legsId = this.incrementPart(this.legsId, increment, TOTAL_NO_LEGS);
                this.legChange.emit(this.legsId);
                break;
        }
    }
}
