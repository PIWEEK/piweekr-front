import {Component, Input, Output, EventEmitter} from "@angular/core";

const TOTAL_NO_HEADS = 10;
const TOTAL_NO_BODY = 11;
const TOTAL_NO_LEGS = 11;

@Component({
    selector: "avatar-editor",
    templateUrl: "./app/components/avatar-editor/avatar-editor.component.html",
    styleUrls:  ["./app/components/avatar-editor/avatar-editor.component.css"],
    inputs: ["head", "body", "leg", "editable"]
})
export class AvatarEditorComponent {
    @Input() head: number;
    @Input() body: number;
    @Input() leg: number;
    @Input() editable: boolean = true;

    kkfuti: boolean = false;

    @Output() headChange: EventEmitter<number> = new EventEmitter();
    @Output() bodyChange: EventEmitter<number> = new EventEmitter();
    @Output() legChange: EventEmitter<number> = new EventEmitter();

    private headId = 1;
    private bodyId = 1;
    private legsId = 1;

    ngOnChanges() {
        this.headId = this.head || this.headId;
        this.bodyId = this.body || this.bodyId;
        this.legsId = this.leg || this.legsId;

        console.log(">>> " + this.editable);
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
