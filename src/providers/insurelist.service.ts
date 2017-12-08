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
  getInsurelistsList(): any {
    return fire.getInsurelistsList (query);
  }
  
  getInsurelist(query): any {
    return fire.getInsurelist (query);
  }
  
  createInsurelist(query ): any {
    return fire.createInsurelist (query);
  }
   updateInsurelist(query): any {
    return fire.updateInsurelist (query);
  }
   deleteInsurelist(query): any {
    return fire.deleteInsurelist (query);
  }
  deleteAll(query): any {
    return fire.deleteAll (query);
  }
  

  // Default error handling for all actions
  private handleError(error:any) {
    console.log(error)
  }


}
