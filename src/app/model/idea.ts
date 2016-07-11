export class Idea {
    title: string;
    description: string;

    constructor(data: {title: string, description: string}) {
        this.title = data.title;
        this.description = data.description;
    }
}

