import { Component , OnInit} from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { SlicePipe } from '@angular/common';
import { AuthService } from '../../providers/auth.service';
import { InsurelistService } from '../../providers/insurelist.service';
import { Insurelist } from '../../pages/transaction-shared/insurelist';
import { UUID } from 'angular2-uuid';
import { TabsPage } from '../tabs/tabs';
import { environment } from '../../config/environment';

let views = environment.views.insurancedetail;

@IonicPage({

  segment: 'insuredetail/:insureId'
})

@Component({
  selector: 'insuredetail',
  templateUrl: 'insuredetail.html'
})

// https://angular.io/api/common/SlicePipe  Used in HTML

export class InsureDetailPage implements OnInit {
  policyissued :string;
  insuredetail :any;
  insureentry: Insurelist = new Insurelist();
  customview : any;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
	public auth: AuthService,
	public insurelistservice: InsurelistService
  ) {
	  
	this.policyissued = null;
	this.customview = views;
	
  }
  // Thanks to https://davidwalsh.name/array-sort
  
ngOnInit() {
	this.policyissued = null;
	//alert(this.navParams.data.insureId);
	 var querydata = {
		type : 'firstbyid',
		id : this.navParams.data.insureId,
		data: { limitToFirst: 1, orderByChild: 'invoiceid',
                equalTo: this.navParams.data.insureId  }
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
