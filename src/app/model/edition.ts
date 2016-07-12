export class Edition {
    name: string;
    startAt: string;

    constructor(data: {name: string, startAt: string}) {
        this.name = data.name;
        this.startAt = data.startAt;
    }
}
