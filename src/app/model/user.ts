export class Avatar {
    head: number;
    body: number;
    legs: number;
    background: string;

    constructor(data: {head: number, body: number, legs: number, background: string}) {
        this.head = data.head;
        this.body = data.body;
        this.legs = data.legs;
        this.background = data.background;
    }
}

export class User {
    username: string;
    email: string;
    fullName: string;
    avatar: Avatar;

    constructor(data: { username: string,
                        email: string,
                        fullName: string,
                        avatar: any}) {
        this.username = data.username;
        this.email = data.email;
        this.fullName = data.fullName;
        this.avatar = new Avatar(data.avatar);
    }
}
