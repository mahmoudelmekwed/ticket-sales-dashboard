
export interface UserData{
    image: string;
    name: string;
    phoneNumber: string;
}

export interface Ticket{
    ticketName: string;
    ticketDetails: string;
}

export interface Account{
    id: number;
    userData: UserData;
    ticketNo: string;
    ticketValue: string;
    cinema: string;
    personCount: number;
    purchasingCount: string;
    ticket: Ticket
}