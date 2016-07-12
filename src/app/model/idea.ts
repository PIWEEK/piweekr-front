import {User} from "./user";

export class Idea {
    uuid: string;
    title: string;
    description: string;
    owner: User;
    reactionsCounts: Map<string, number>;
    commentsCount: number;
    createdAt: string;
    isPublic: boolean;
    forkedFrom: string;

    constructor(data: {uuid: string,
                       title: string
                       description: string,
                       owner? : any,
                       reactionsCounts? : Map<string, number>,
                       commentsCount? : number,
                       createdAt: string,
                       isPublic: boolean,
                       forkedFrom? : string}) {

        this.uuid = data.uuid;
        this.title = data.title;
        this.description = data.description;
        this.owner = (data.owner) ? new User(data.owner) : null;
        this.reactionsCounts = data.reactionsCounts;
        this.commentsCount = data.commentsCount;
        this.createdAt = data.createdAt;
        this.isPublic = data.isPublic;
        this.forkedFrom = data.forkedFrom;
    }
}

