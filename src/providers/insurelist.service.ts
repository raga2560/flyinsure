import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Insurelist } from '../pages/transaction-shared/insurelist';
import {FireInsurelistService} from './fireinsurelist';

import { environment } from '../config/environment';

let storage = environment.storage;

// Core



@Injectable()
export class InsurelistService {

  

  constructor(private fire: FireInsurelistService ) { 
  
	  
  }


  // Return an observable list with optional query
  // You will usually call this from OnInit in a component
  getInsurelistsList(query): any {
    return this.fire.getInsurelistsList (query);
  }
  
  getInsurelist(query): any {
    return this.fire.getInsurelist (query);
  }
  
  createInsurelist(query ): any {
    return this.fire.createInsurelist (query);
  }
   updateInsurelist(query, val): any {
    return this.fire.updateInsurelist (query, val);
  }
   deleteInsurelist(query): any {
    return this.fire.deleteInsurelist (query);
  }
  deleteAll(): any {
    return this.fire.deleteAll ();
  }
  

  // Default error handling for all actions
  private handleError(error:any) {
    console.log(error)
  }


}
