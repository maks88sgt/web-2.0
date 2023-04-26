export type GeneralResponse<T = void> = {
    message: string;
    payload?: T
}


export type ChatDTO = {
    _id: string;
    chatname: string;
    participants: string[];
    owner: string;
    messages: MessageDTO[]
}


export type MessageDTO = {
    text: string;
    author: string;
    date: string;
}
