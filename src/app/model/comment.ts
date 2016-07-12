import moment from 'moment';
import {User} from "./user";

export class Comment {
    uuid: string;
    owner: User;
    createdAt: moment.Moment;
    content: string;

    constructor(data: {uuid: string,
                       owner: any,
                       createdAt: string,
                       content: string}) {
        this.uuid = data.uuid;
        this.owner = new User(data.owner);
        this.createdAt = moment(data.createdAt);
        this.content = data.content;
    }
}
