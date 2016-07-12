import { User } from "../model/user";

export class UserSessionService {
    token: String;
    currentUser: User;

    constructor() {
    }

    store(result: any) {
        this.token = result.token;
        this.currentUser = new User(result);
    }
}
