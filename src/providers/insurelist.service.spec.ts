
import {InsurelistService} from './insurelist.service';
import { Insurelist } from '../pages/transaction-shared/insurelist';
import { environment } from '../config/environment';
import { testgroup } from '../config/choices';
import {FireInsurelistService} from './fireinsurelist';
import {MongoInsurelistService} from './mongoinsurelist';
import {
  TestBed, inject
} from '@angular/core/testing';

// https://www.joshmorony.com/test-driven-development-in-ionic-2-services-and-templates/
// https://www.joshmorony.com/test-driven-development-in-ionic-2-navigation-and-spies/
// https://www.joshmorony.com/test-driven-development-in-ionic-2-http-and-mocks/
// https://www.joshmorony.com/how-to-unit-test-an-ionic-2-application/
// http://breazeal.com/blog/jasmineBefore.html
// https://chariotsolutions.com/blog/post/testing-angular-2-0-x-services-http-jasmine-karma/
// https://github.com/krimple/angular2-unittest-samples-release/blob/master/src/app/services/blog.service.spec.ts

let storage = environment.storage.type;

let insurelisttest = null;

// Core
/*
describe('Insurancelist service initial testing', () => {
	
	
	beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        InsurelistService
      ]
    });
  });
 
  it('is created', 
    inject([InsurelistService], (insurelisttest1) => {
 
	insurelisttest = insurelisttest1;
    expect(insurelisttest).toBeDefined();
 
    
    }));
  
 
    it('Initial list should have zero entry', () => {
	
	  expect(insurelisttest).toBeTruthy();
		let result = insurelisttest.getInsurelistsList();
 
        expect(Array.isArray(result)).toBeTruthy;
        expect(result.length).toBeGreaterThan(0);
 
    });
})
*/
/*
consumerid:string;
  validatorid:string;
  invoiceid:string;
  invoiceimage:string;
  invoicedesc:string;
  billamount: number;
  insuranceamt: number;
  insurepremium: number;
  insureprovider: string;
  premiumpaid: false;
  decision: string; // pending,issued, refused, expired
  paidtimeStamp: number;
  gpsofconsumer: string;
  blockchaintransactionid: string;
  active = true;
*/
describe('Insurancelist service testing', () => {
	
	beforeEach(() => {
      insurelisttest = new InsurelistService();
	  expect(insurelisttest).toBeTruthy();
    });
	
 
    it('Initial list should have zero entry', () => {
		let query = {
			type : 'firstbyid'
		}
		let result = insurelisttest.getInsurelistsList(query);
 
        expect(Array.isArray(result)).toBeTruthy;
        expect(result.length).toBeGreaterThan(0);
 
    });
	it('Only this user data should come', () => {
		// create user1, with insurance data
		var data = {
			
		};
		let insuredata = new Insurelist();
		insuredata.invoicedesc = 'auto insurance';
		insuredata.insuranceamt = 1000;
		insuredata.billamount = 10000;
		insuredata.consumerid = 'ABC1';
		insuredata.invoiceid = 'INC101';
		
		// Need to check if .then is needed
		insurelisttest.createInsurelist(insuredata);
		
		let result = insurelisttest.getInsurelistsList();
 
        expect(Array.isArray(result)).toBeTruthy;
        expect(result.length).toEqual(1);
 
    });
	/*
	it('Other user data access should fail', () => {
		let result = insurelisttest.getInsurelistsList();
 
        expect(Array.isArray(result)).toBeTruthy;
        expect(result.length).toBeGreaterThan(0);
 
    });
	it('Added list of insurances should be correct', () => {
		let result = insurelisttest.getInsurelistsList();
 
        expect(Array.isArray(result)).toBeTruthy;
        expect(result.length).toBeGreaterThan(0);
 
    });
	it('Failed list of insurances should be shown as failed', () => {
		let result = insurelisttest.getInsurelistsList();
 
        expect(Array.isArray(result)).toBeTruthy;
        expect(result.length).toBeGreaterThan(0);
 
    });
	it('getlist of insurances', () => {
 
        expect(true).toBeTruthy();
 
    }); */
 
 
});

/*
@Injectable()
export class InsurelistService {



  constructor(private fire: FireInsurelistService,
		 private mongo: MongoInsurelistService 
) { 
	
	  
  }


  // Return an observable list with optional query
  // You will usually call this from OnInit in a component
  getInsurelistsList(query): any {
    if(query.type == 'first') {
      if(storage == 'mongo')
      {
	  var data = {};
          return this.mongo.getInsurelistsList (data);
      }
      else 
      {
           return this.fire.getInsurelistsList (query.data);
      }
    } else  if(query.type == 'firstbyid') {
      if(storage == 'mongo')
      {
			var data = {};
          return this.mongo.getInsurelistsList (data);
      }
      else 
      {
           return this.fire.getInsurelistsList (query.data);
      }
    }
  }
  
  getInsurelist(key): any {
      if(storage == 'mongo')
      {
         return this.mongo.getInsurelist (key);
      }
      else 
      {
         return this.fire.getInsurelist (key);
      }
  }
  
  createInsurelist(passeddata ): any {
    if(passeddata.type == 'simple')
    {
      if(storage == 'mongo')
      {
         return this.mongo.createInsurelist (passeddata.data);
      }
      else 
      {
         return this.fire.createInsurelist (passeddata.data);
      }
    }
  }
   updateInsurelist(key, passeddata): any {
    if(passeddata.type == 'simple')
    {  
      if(storage == 'mongo')
      {
         return this.mongo.updateInsurelist (key, passeddata.data);
      }
      else 
      {
         return this.fire.updateInsurelist (key, passeddata.data);
      }
    }
  }
   deleteInsurelist(key): any {
      if(storage == 'mongo')
      {
         return this.mongo.deleteInsurelist (key);
      }
      else 
      {
         return this.fire.deleteInsurelist (key);
      }
  }
  deleteAll(): any {
	
      if(storage == 'mongo')
      {
        return this.mongo.deleteAll ();
      }
      else
      {
        return this.fire.deleteAll ();
      }
  }
  

  // Default error handling for all actions
  private handleError(error:any) {
    console.log(error)
  }


}
*/