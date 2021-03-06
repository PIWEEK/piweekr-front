import moment from 'moment';
import { User } from "./user";

export class Comment {
    uuid: string;
    owner: User;
    createdAt: moment.Moment;
    content: string;

    constructor(data: {uuid?: string,
                       owner?: any,
                       createdAt?: string,
                       content: string}) {
        this.uuid = data.uuid;
        if (data.owner) {
            this.owner = new User(data.owner);
        }
        this.createdAt = data.createdAt ? moment(data.createdAt) : moment();
        this.content = data.content;
    }
}
