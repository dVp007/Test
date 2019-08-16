export interface Form {
    name: string;
    logoUri: string;
    typeOfTrademark: string;
    wordMark: string;
    class: string[];
    typeOfRegistration: string;
    services: string;
    nameOfEntity: string;
    documents: Array<object>;
    address: Array<object>;
    phoneNumber: number;
    email: string;
    pricing: number;
    payment: string;
    order_info: Array<object>;
}
