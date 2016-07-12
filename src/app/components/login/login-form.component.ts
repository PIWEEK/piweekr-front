import { Component } from "@angular/core";
import { LoginAuth } from "../../model/auth";

@Component({
    selector: "login-form",
    templateUrl: "./app/components/login/login-form.component.html",
    styleUrls: ["./app/components/login/login-form.component.css"]
})
export class LoginFormComponent {
    model: LoginAuth = new LoginAuth();
    submitted: boolean = false;

    onSubmit() {
        this.submitted = true;
        if (!this.submited) {
            console.log(JSON.stringify(this.model));
        }
    }
}

