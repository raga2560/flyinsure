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
		type: 'firebase'  // firebase, mongodb, aws
		
	},
	insurancerec: {
		type:'single',  // single, daily, sizelimit, parallel
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

