import { Component } from '@angular/core';
import { Platform, ModalController } from 'ionic-angular';
//import { StatusBar, Splashscreen } from 'ionic-native';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//import { Splash } from '../pages/splash/splash';

import firebase from 'firebase';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;
  

  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, modalCtrl: ModalController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
//      StatusBar.styleDefault();
//      Splashscreen.hide();
	  
	  statusBar.styleDefault();

//			let splash = modalCtrl.create(Splash);
//			splash.present();


      const firebaseConfig = {
      apiKey: "AIzaSyB3uqv_ZDfYd6zJhSRavhQ5IoRiaI8c-Mg",
						authDomain: "the-deal-maker.firebaseapp.com",
						databaseURL: "https://the-deal-maker.firebaseio.com",
						projectId: "the-deal-maker",
						storageBucket: "the-deal-maker.appspot.com",
						messagingSenderId: "60029212930"

      };
	  
	   
	

    //  firebase.initializeApp(firebaseConfig);
    });
  }
}
