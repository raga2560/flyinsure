import { Component , OnInit} from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { SlicePipe } from '@angular/common';
import { AuthService } from '../../providers/auth.service';
import { InsurelistService } from '../../providers/insurelist.service';
import { Insurelist } from '../../pages/transaction-shared/insurelist';
import { UUID } from 'angular2-uuid';
import { TabsPage } from '../tabs/tabs';

@IonicPage({

  segment: 'tradepanel/:invoiceId'
})

@Component({
  selector: 'tradepanel',
  templateUrl: 'tradepanel.html'
})

// https://angular.io/api/common/SlicePipe  Used in HTML

export class TradePanelPage implements OnInit {
 homeowneraccount: any;
  buyingprice: any [];
  sellingprice: any [];
  propertyid: string;
  propertycode: string;
  policyissued :string;
  insureentry: Insurelist = new Insurelist();
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
	public auth: AuthService,
	public insurelistservice: InsurelistService
  ) {
	  
	//  this.buyingprice = [1500, 1400, 1430];
	//  this.sellingprice = [1600, 1560, 1700];
	this.policyissued = null;
	
  }
  // Thanks to https://davidwalsh.name/array-sort
  
ngOnInit() {
	this.policyissued = null;
	 this.insurelistservice.getInsurelistsList({ limitToFirst: 1, orderByChild: 'invoiceid',
    equalTo: this.navParams.data.invoiceId  }).subscribe(data=> {
		this.insuredetail = data[0];
		// alert(JSON.stringify(this.propertydetail));
	});
	

	}
		
	canceloffer() {
		this.navCtrl.push(TabsPage);
	}
	
  buyinsurance (company, amt) {
	  this.policyissued = UUID.UUID();
  }

  

  ionViewWillEnter() {
	  
	  //this.buyingprice = [1500, 1400, 1430];
	  //this.sellingprice = [1600, 1560, 1700];
	  
	  	 
    /* this.dataProvider.load().subscribe((data: any) => {
      if (
        data &&
        data.schedule &&
        data.schedule[0] &&
        data.schedule[0].groups
      ) {
        for (const group of data.schedule[0].groups) {
          if (group && group.sessions) {
            for (const session of group.sessions) {
              if (session && session.id === this.navParams.data.sessionId) {
                this.session = session;
                break;
              }
            }
          }
        }
      }
    }); */
  }
  
  
  
}
