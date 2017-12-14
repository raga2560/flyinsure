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

