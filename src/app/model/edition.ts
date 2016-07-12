import moment from "moment";

export class Edition {
    name: string;
    startAt: moment.Moment;

    constructor(data: {name: string, startAt: string}) {
        this.name = data.name;
        this.startAt = moment(data.startAt);
    }
}
