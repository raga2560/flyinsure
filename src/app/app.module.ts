import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import { TradePanelPage } from '../pages/tradepanel/tradepanel';
import { UserPage } from '../pages/userdata/userdata';
import { InsureDetailPage } from '../pages/insuredetail/insuredetail';
import { InsuranceListPage } from '../pages/insurelist/insurelist';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AuthService } from '../providers/auth.service';
import { InsurelistService } from '../providers/insurelist.service';
import { FireInsurelistService } from '../providers/fireinsurelist';
import { MongoInsurelistService } from '../providers/mongoinsurelist';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { Camera } from '@ionic-native/camera';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';


import { AngularFireDatabase } from 'angularfire2/database';
import { UserData } from '../providers/user-data';
import { AngularFireAuth } from 'angularfire2/auth';
import {HttpModule} from '@angular/http';


const firebaseConfig = {
      apiKey: "AIzaSyB3uqv_ZDfYd6zJhSRavhQ5IoRiaI8c-Mg",
						authDomain: "the-deal-maker.firebaseapp.com",
						databaseURL: "https://the-deal-maker.firebaseio.com",
						projectId: "the-deal-maker",
						storageBucket: "the-deal-maker.appspot.com",
						messagingSenderId: "60029212930"

      };

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
	TradePanelPage,
	InsuranceListPage,
	InsureDetailPage,
	FileSelectDirective,
	UserPage,
	SignupPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
	HttpModule,
	AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp, {},{
	links: [
        {component: InsuranceListPage, name: 'InsuranceList', segment: 'insurancelist'},
		{component: InsureDetailPage, name: 'InsureDetail', segment: 'insuredetail/:insureId'},
		{component: UserPage, name: 'UserPage', segment: 'userdata'},
		//{component: HomePage, name: 'HomePage', segment: 'home'},
		//{component: SignupPage, name: 'SignupPage', segment: 'signup'},
		{component: TradePanelPage, name: 'TradePanel', segment: 'tradepanel/:invoiceId' 		}
        
      ]
	}),
	IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
	SignupPage,
    HomePage,
	TradePanelPage,
	InsuranceListPage,
	InsureDetailPage,
	UserPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
	UserData,
	InsurelistService,
	
	FireInsurelistService,
	MongoInsurelistService,
	AuthService,
	AngularFireAuth,
	AngularFireDatabase,
	FileTransfer,
	Transfer,
//  FileUploadOptions,
//  FileTransferObject,
  File,
  Camera,
	
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
