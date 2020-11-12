export class ChatMessageDto {
    id: Number;
    user: string;
    message: string;
    date: string;

    constructor(user: string, message: string, date: string){
        this.id = 0;
        this.user = user;
        this.message = message;
        this.date = date;
    }
}