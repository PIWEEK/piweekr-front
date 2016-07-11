export class Avatar {
    head: number;
    body: number;
    legs: number;

    constructor(data: {head: number, body: number, legs: number}) {
        this.head = data.head;
        this.body = data.body;
        this.legs = data.legs;
    }
}

export class User {
    uid: string;
    username: string;
    email: string;
    fullName: string;
    avatar: Avatar;

    constructor(data: { uid: string,
                        username: string,
                        email: string,
                        fullName: string,
                        avatar: {head: number, body: number, legs: number}}) {
        this.username = data.username;
        this.email = data.email;
        this.fullName = data.fullName;
        this.avatar = new Avatar(data.avatar);
    }
}
