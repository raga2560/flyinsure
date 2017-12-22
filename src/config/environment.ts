export const environment = {
    production: false,
    firebaseConfig: {
     apiKey: "AIzaSyB3uqv_ZDfYd6zJhSRavhQ5IoRiaI8c-Mg",
						authDomain: "the-deal-maker.firebaseapp.com",
						databaseURL: "https://the-deal-maker.firebaseio.com",
						projectId: "the-deal-maker",
						storageBucket: "the-deal-maker.appspot.com",
						messagingSenderId: "60029212930"
	
    },
	upload :
	{
		type: 'native'  // ngupload  . Native may not work on desktops
		// Standard upload https://ciphertrick.com/2016/10/24/file-upload-with-angular2-nodejs/ 
		// Example of native upload https://www.djamware.com/post/599da16580aca768e4d2b130/how-to-upload-file-on-ionic-3-%20using-native-file-transfer-plugin
		// Native download https://github.com/dsgriffin/ionic-3-file-transfer-example/blob/master/src/pages/home/home.ts
	},
	paytmtype :
	{
		type:'server' // apktype
	},
	storage: 
	{
		type: 'mongo'  // firebase, mongo, aws
		
	},
	insurancerec: {
		type:'single',  // single, daily, sizelimit, parallel
		singlerec: {
		"insurancelist": 'insurancelist',
		"userrec": 'userrec',
		"quoterec": "quotes", // wil have quite request-id, and associated quotes
		"quoterequest": 'quoterequests',
		"rating": 'rating',	
		
		},
		sizelimit: 10000,   // applicable for sizelimit, parallel
		parallelnumber: 4   // number of parallel
	},
	views :{
		insurancelist: {
			
		},
		insurancedetail: {
			invoice: true
		},
		home: {
			
		},
		userpage :{
			
		},
		tradepanel :{  //dynamic
			
		},
		login: {  //dynamic
			
		}
		
	},
	blockchain : {
		type: 'none' // multichain, hyperledger
	},
	fields : {
		insuretypes: ['Small Truck', 'Cargo']
	},
	login: {
		email: true,
		gmail: true
	}
};

