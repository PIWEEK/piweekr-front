import { Component, Input } from '@angular/core';
import { UserListComponent } from "../../components/user-list/user-list.component";
import { AvatarEditorComponent } from "../../components/avatar-editor/avatar-editor.component";

const BASE_DIR = './app/components/marketplace-card/';

@Component({
    selector: "marketplace-card",
    templateUrl: `${BASE_DIR}/marketplace-card.component.html`,
    styleUrls: [`${BASE_DIR}/marketplace-card.component.css`],
    directives: [UserListComponent, AvatarEditorComponent]
})

export class MarketplaceCardComponent {
    @Input() card: Object;
}
