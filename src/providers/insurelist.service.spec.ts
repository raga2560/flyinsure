
import {InsurelistService} from './insurelist.service';

import { environment } from '../config/environment';
import { testgroup } from '../config/choices';


let storage = environment.storage.type;


// Core

describe('Insurancelist service testing', () => {
	
	
 
    it('should do nothing', () => {
 
        expect(true).toBeTruthy();
 
    });
	
	it('getlist of insurances', () => {
 
        expect(true).toBeTruthy();
 
    });
 
 
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