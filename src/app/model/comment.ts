import {User} from "./user";

export class Comment {
    uuid: string;
    owner: User;
    createdAt: string;
    content: string;

    constructor(data: {uuid: string,
                       owner: any,
                       createdAt: string,
                       content: string}) {
        this.uuid = data.uuid;
        this.owner = new User(data.owner);
        this.createdAt = data.createdAt;
        this.content = data.content;
    }
}
