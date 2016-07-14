import moment from 'moment';
import {User} from "./user";

export class Idea {
    uuid: string;
    title: string;
    description: string;
    owner: User;
    reactionsCounts: Map<string, number>;
    commentsCount: number;
    createdAt: moment.Moment;
    isPublic: boolean;
    forkedFrom: string;
    users: User[];

    constructor(data: {uuid: string,
                       title: string
                       description: string,
                       owner? : any,
                       reactionsCounts? : Map<string, number>,
                       commentsCount? : number,
                       createdAt: string,
                       isPublic: boolean,
                       forkedFrom? : string,
                       users?: any}) {

        this.uuid = data.uuid;
        this.title = data.title;
        this.description = data.description;
        this.owner = (data.owner) ? new User(data.owner) : null;
        this.reactionsCounts = data.reactionsCounts;
        this.commentsCount = data.commentsCount;
        this.createdAt = moment(data.createdAt);
        this.isPublic = data.isPublic;
        this.forkedFrom = data.forkedFrom;
        this.users = data.users ? data.users.map(u => new User(u)) : [];
    }
}

