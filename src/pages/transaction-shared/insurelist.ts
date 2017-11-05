export class Insurelist {
  $key: string;
  consumerid:string;
  validatorid:string;
  invoiceid:string;
  invoiceimage:string;
  billamount: number;
  insuranceamt: number;
  insurepremium: number;
  premiumpaid: false;
  decision: string; // pending,issued, refused, expired
  paidtimeStamp: number;
  gpsofconsumer: string;
  blockchaintransactionid: string;
  active = true;
  timeStamp: number;
}
