export class Order {
    _id: string;
    iname: string;
    idesc: string;
    cname: string;
    cemail: string;
    cphone: string;
    caddress: {type:string,required:true};
    quan: number;
    price: number;
    date: string;
}
