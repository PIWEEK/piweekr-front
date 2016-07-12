import {Component} from "@angular/core";
import {LoginFormComponent} from "../../components/login/login-form.component";

@Component({
    selector: "login-layout",
    templateUrl: "./app/layout/login/login.component.html",
    styleUrls: ["./app/layout/login/login.component.css"],
    directives: [LoginFormComponent]
})
export class LoginComponent {
}
