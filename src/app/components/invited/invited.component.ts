import { Component, Input } from '@angular/core';

const BASE_DIR = './app/components/invited';

@Component({
    selector: 'invited',
    templateUrl: `${BASE_DIR}/invited.component.html`,
    styleUrls: [`${BASE_DIR}/invited.component.css`]
})

export class InvitedComponent {
    @Input() inviteds: Array<Object>;

    ngOnChanges() {
        this.inviteds = this.inviteds || [];
    }
}
