export class Insurelist {
  $key: string;
  _id: string;
  consumerid:string;
  validatorid:string;
  invoiceid:string;
  invoiceimage:string;
  invoicedesc:string;
  billamount: number;
  insuranceamt: number;
  insurepremium: number;
  insureprovider: string;
  premiumpaid: false;
  decision: string; // pending,issued, refused, expired
  paidtimeStamp: number;
  gpsofconsumer: string;
  blockchaintransactionid: string;
  active = true;
  timeStamp: number;
}
