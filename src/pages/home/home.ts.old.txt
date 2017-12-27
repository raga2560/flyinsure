import { Component } from '@angular/core';
import firebase from 'firebase';

import { NavController, Platform, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from 'ionic-native';
import { TradePanelPage } from '../tradepanel/tradepanel';
import { InsurelistService } from '../../providers/insurelist.service';
import { Insurelist } from '../../pages/transaction-shared/insurelist';
import {Transfer, TransferObject} from '@ionic-native/transfer';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { FileUploader } from 'ng2-file-upload';

declare var cordova: any;
// Native download example https://github.com/dsgriffin/ionic-3-file-transfer-example/blob/master/src/pages/home/home.ts

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  captureDataUrl: string;
  alertCtrl: AlertController;
  myobj : any;
  
  //native image upload
  imageURI:any;
imageFileName:any;

//native image download
 storageDirectory: string = '';
  
  // standard uploader
  public uploader:FileUploader = new FileUploader({
		url:'http://localhost:8081/fileupload',
		allowedFileType: ["pdf"],
		maxFileSize: 1*1024*1024
   });

   public imageuploader:FileUploader = new FileUploader({
		url:'http://localhost:8081/imageupload',
		allowedFileType: ["image"],
		maxFileSize: 1*1024*1024
   });
   
  insureentry: Insurelist = new Insurelist();
  

  constructor(public navCtrl: NavController, alertCtrl: AlertController,
  public insurelistservice: InsurelistService,
  private filetransfer: FileTransfer,
  private transfer: Transfer, private file: File,
  public loadingCtrl: LoadingController,
  public platform: Platform,
  public toastCtrl: ToastController
  
  ) {
    this.alertCtrl = alertCtrl;

	 if(!this.platform.is('cordova')) {
        return ;
      }
	 if (this.platform.is('ios')) {
        this.storageDirectory = cordova.file.documentsDirectory;
      }
      else if(this.platform.is('android')) {
        this.storageDirectory = cordova.file.dataDirectory;
      }
      else {
        // exit otherwise, but you could add further types here e.g. Windows
        return ;
      }
	  
	 
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
  
  // Native download
  //---------------------- Native download down---------------------------------------------//
  downloadImage(image) {

  if(!this.platform.is('cordova')) {
        return ;
      }
    this.platform.ready().then(() => {

      const fileTransfer2: TransferObject = this.transfer.create();

	  
      const imageLocation = `${cordova.file.applicationDirectory}www/assets/img/${image}`;
	  

      fileTransfer2.download(imageLocation, this.storageDirectory + image).then((entry) => {

        const alertSuccess = this.alertCtrl.create({
          title: `Download Succeeded!`,
          subTitle: `${image} was successfully downloaded to: ${entry.toURL()}`,
          buttons: ['Ok']
        });

        alertSuccess.present();

      }, (error) => {

        const alertFailure = this.alertCtrl.create({
          title: `Download Failed!`,
          subTitle: `${image} was not successfully downloaded. Error code: ${error.code}`,
          buttons: ['Ok']
        });

        alertFailure.present();

      });

    });

  }

  retrieveImage(image) {

  if(!this.platform.is('cordova')) {
        return ;
      }
    this.file.checkFile(this.storageDirectory, image)
      .then(() => {

        const alertSuccess = this.alertCtrl.create({
          title: `File retrieval Succeeded!`,
          subTitle: `${image} was successfully retrieved from: ${this.storageDirectory}`,
          buttons: ['Ok']
        });

        return alertSuccess.present();

      })
      .catch((err) => {

        const alertFailure = this.alertCtrl.create({
          title: `File retrieval Failed!`,
          subTitle: `${image} was not successfully retrieved. Error Code: ${err.code}`,
          buttons: ['Ok']
        });

        return alertFailure.present();

      });
  }
  
  //-----------------------Native upload down -----------------------------//
  //native image upload
  getImage() {
  const options: CameraOptions = {
    quality: 100,
    destinationType: Camera.DestinationType.FILE_URI,
    sourceType: Camera.PictureSourceType.PHOTOLIBRARY
  }

  Camera.getPicture(options).then((imageData) => {
    this.imageURI = imageData;
  }, (err) => {
    console.log(err);
    this.presentToast(err);
  });
}

uploadFile() {
  let loader = this.loadingCtrl.create({
    content: "Uploading..."
  });
  loader.present();
  const fileTransfer: FileTransferObject = this.filetransfer.create();

  let options: FileUploadOptions = {
    fileKey: 'ionicfile',
    fileName: 'ionicfile',
    chunkedMode: false,
    mimeType: "image/jpeg",
    headers: {}
  }

  fileTransfer.upload(this.imageURI, 'http://192.168.0.7:8080/api/uploadImage', options)
    .then((data) => {
    console.log(data+" Uploaded Successfully");
    this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg"
    loader.dismiss();
    this.presentToast("Image uploaded successfully");
  }, (err) => {
    console.log(err);
    loader.dismiss();
    this.presentToast(err);
  });
}
presentToast(msg) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 3000,
    position: 'bottom'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
  
}
//---------------End native image upload---------------------------------//
  
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
	
		this.insureentry.invoiceimage = snapshot.downloadURL;
		
		this.showSuccesfulUploadAlert();
    });

  }
  
  
  UpdateInsureEntry() {
        var passingdata = {
		type:'simple',
		data : this.insureentry
        };	
	this.insurelistservice.createInsurelist(passingdata);
	
	this.goToTradePanel();
	   
  }
  
  createInsureEntry() {
	
        var passingdata = {
		type:'simple',
		data : this.insureentry
        };	
	
    this.insurelistservice.createInsurelist(passingdata);
	
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
