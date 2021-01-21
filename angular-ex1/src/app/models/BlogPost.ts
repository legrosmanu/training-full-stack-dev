export class BlogPost {

    title: string;
    content: string;
    loveIts: number;
    createdAt: Date;

    constructor() {
        this.title = "";
        this.content = "";
        this.loveIts = 0;
        this.createdAt = new Date();
    }

}
