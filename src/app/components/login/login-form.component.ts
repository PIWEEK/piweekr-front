import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Router } from "@angular/router";
import { LoginAuth } from "../../model/auth";
import { ApiService } from "../../services/api.service";


@Component({
    selector: "login-form",
    templateUrl: "./app/components/login/login-form.component.html",
    styleUrls: ["./app/components/login/login-form.component.css"]
})
export class LoginFormComponent {
    @Output() loginVisibility = new EventEmitter<any>();

    model: LoginAuth = new LoginAuth();
    submitted: boolean = false;

    errorMessage: string;

    constructor(private api: ApiService, private router: Router) {
        this.model.userName = "user-1";
        this.model.password = "123123";
    }

    onSubmit() {
        this.submitted = true;

        this.api.auth.login(this.model).subscribe(
            user => {
                this.onHideLogin();
                this.router.navigate(['/']);
            },
            err => this.errorMessage = `${err}`
        );
    }
    onHideLogin() {
        this.loginVisibility.emit(null);
    }
}
