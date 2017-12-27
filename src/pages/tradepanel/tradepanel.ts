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
  policyissued :string;
  insuredetail :any;
  insureentry: Insurelist = new Insurelist();
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
//	public auth: AuthService,
	public insurelistservice: InsurelistService
  ) {
	  
	this.policyissued = null;
	
  }
  // Thanks to https://davidwalsh.name/array-sort
  
ngOnInit() {
	this.policyissued = null;
	 var querydata = {
		type : 'first',
		data: { limitToFirst: 1, orderByChild: 'invoiceid',
                equalTo: this.navParams.data.invoiceId  }
            };
	 this.insurelistservice.getInsurelistsList(querydata,
         ).subscribe(data=> {
		this.insuredetail = data[0];
		// alert(JSON.stringify(data));
	});
	
/*    // equalTo: this.navParams.data.invoiceId    */

	}
		
	canceloffer() {  // (2)
		this.navCtrl.push(TabsPage);
	}
	
  	buyinsurance (company, amt) {   // (1)
	  var offer = {
		  
	  };
	  /*
	  //this.requestid = UUID.UUID();
	  
	  this.insurelistservice.buyInsurance(offer).subscribe(data=> {
		this.policyissued = data[0];
		// alert(JSON.stringify(this.propertydetail));
	});
	  */
  }

  

  ionViewWillEnter() {
	  
	
  }
  
  
  
}
