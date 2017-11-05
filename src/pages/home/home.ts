import { Component } from '@angular/core';
import firebase from 'firebase';

import { NavController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from 'ionic-native';
import { TradePanelPage } from '../tradepanel/tradepanel';
import { InsurelistService } from '../../providers/insurelist.service';
import { Insurelist } from '../../pages/transaction-shared/insurelist';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  captureDataUrl: string;
  alertCtrl: AlertController;
  myobj : any;
  
	
	insureentry: Insurelist = new Insurelist();
  

  constructor(public navCtrl: NavController, alertCtrl: AlertController,
  public insurelistservice: InsurelistService
  ) {
    this.alertCtrl = alertCtrl;
  }

  capture() {
    const cameraOptions: CameraOptions = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      encodingType: Camera.EncodingType.JPEG,
      mediaType: Camera.MediaType.PICTURE,
    };
   
    Camera.getPicture(cameraOptions).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
	  // alert(this.captureDataUrl);
    }, (err) => {
      // Handle error
	  alert(err);
    });
  }
  
   goToTradePanel() {
	//  alert(JSON.stringify(property));
    this.navCtrl.push(TradePanelPage, { invoiceId: this.insureentry.invoiceid});
  }
  
  
  upload() {
	
    let storageRef = firebase.storage().ref();

    const filename = Math.floor(Date.now() / 1000);

    // Create a reference to 'images/todays-date.jpg'
    const imageRef = storageRef.child(`images/${filename}.jpg`);

    imageRef.putString(this.captureDataUrl, firebase.storage.StringFormat.DATA_URL).then((snapshot)=> {
		//alert(snapshot.downloadURL);
		this.insureentry.invoiceimage = snapshot.downloadURL;
		// this.createInsureEntry();
		
		
      this.showSuccesfulUploadAlert();
    });

  }
  
  
  UpdateInsureEntry() {
	
	
    
	this.insurelistservice.createInsurelist(this.insureentry);
	
	this.goToTradePanel();
	
    
	   
  }
  
  createInsureEntry() {
	
	
    this.insurelistservice.createInsurelist(this.insureentry);
	
	this.goToTradePanel();
	
    
	   
  }

  showSuccesfulUploadAlert() {
    let alert = this.alertCtrl.create({
      title: 'Uploaded!',
      subTitle: 'Picture is uploaded to Firebase',
      buttons: ['OK']
    });
    alert.present();

    // clear the previous photo data in the variable
   // this.captureDataUrl = "";
  }



}
