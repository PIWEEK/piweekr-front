import { User } from "../model/user";

export class UserSessionService {
    public token: String;
    public currentUser: User;

    constructor() {
    }

    store(result: any) {
        this.token = result.token;
        this.currentUser = new User(result);
    }
}
