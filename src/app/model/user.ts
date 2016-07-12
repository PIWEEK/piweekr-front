export class Avatar {
    head: number;
    body: number;
    legs: number;
    background: string;

    constructor(data: {head: number, body: number, legs: number, background: string}) {
        this.head = data.head;
        this.body = data.body;
        this.legs = data.legs;
    }
}

export class User {
    userName: string;
    email: string;
    fullName: string;
    avatar: Avatar;

    constructor(data: { userName: string,
                        email: string,
                        fullName: string,
                        avatar: any}) {
        this.userName = data.userName;
        this.email = data.email;
        this.fullName = data.fullName;
        this.avatar = new Avatar(data.avatar);
    }
}
