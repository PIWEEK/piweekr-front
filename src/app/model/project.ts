import moment from 'moment';
import {User} from "./user";
import {Idea} from "./idea";
import {Edition} from "./edition";

export class Project {
    uuid: string;
    title: string;
    description: string;
    technologies: string[];
    commentsCount: number;
    idea: Idea;
    reactionsCounts: Map<string, number>;
    needs: string;
    logo: string;
    piweek: Edition;
    createdAt: moment.Moment;
    owner: User;
    usersInterested: User[];

    constructor(data: {uuid: string,
                       title: string,
                       description: string,
                       technologies: string[],
                       commentsCount: number,
                       ideaFrom?: any,
                       reactionsCounts: Map<string, number>,
                       needs: string,
                       logo: string,
                       piweek: any,
                       createdAt: string,
                       owner: any,
                       usersInterested?: any[]
                      }) {
        this.uuid = data.uuid;
        this.title = data.title;
        this.description = data.description;
        this.technologies = data.technologies;
        this.commentsCount = data.commentsCount;
        this.idea = new Idea(data.ideaFrom);
        this.reactionsCounts = data.reactionsCounts;
        this.needs = data.needs;
        this.logo = data.logo;
        //this.piweek = new Edition(data.piweek);
        this.createdAt = moment(data.createdAt);
        this.owner = new User(data.owner);
        if (data.usersInterested) {
            this.usersInterested = data.usersInterested.map(p => new User(p.user));
        }
    }
}
