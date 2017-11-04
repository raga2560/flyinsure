import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import firebase from 'firebase';

import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      const firebaseConfig = {
      apiKey: "AIzaSyB3uqv_ZDfYd6zJhSRavhQ5IoRiaI8c-Mg",
						authDomain: "the-deal-maker.firebaseapp.com",
						databaseURL: "https://the-deal-maker.firebaseio.com",
						projectId: "the-deal-maker",
						storageBucket: "the-deal-maker.appspot.com",
						messagingSenderId: "60029212930"

      };
	  
	   
	

      firebase.initializeApp(firebaseConfig);
    });
  }
}
