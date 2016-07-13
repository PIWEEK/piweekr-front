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

    constructor(private api: ApiService, private router: Router) {}

    onSubmit() {
        this.submitted = true;
        console.log(JSON.stringify(this.model));

        this.api.auth.login(this.model).subscribe(
            user => this.router.navigate(['/']),
            err => console.error(">>> ERROR", err)
        );
    }
    onHideLogin() {
        this.loginVisibility.emit(null);
    }
}
