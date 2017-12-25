import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Insurelist } from '../pages/transaction-shared/insurelist';





@Injectable()
export class FireInsurelistService {

  private basePath = '/insurelists';

  insurelists: FirebaseListObservable<Insurelist[]> ; //= null; //  list of objects
  insurelist: FirebaseObjectObservable<Insurelist> ; // = null; //   single object
  

  constructor(private db: AngularFireDatabase ) { 
  // alert('second');
	  this.insurelists = this.db.list('/insurelists', {
      query: {}
    });
  }


  // Return an observable list with optional query
  // You will usually call this from OnInit in a component
  getInsurelistsList(query = {}): FirebaseListObservable<Insurelist[]> {
    this.insurelists = this.db.list('/insurelists', {
      query: query
    });
    return this.insurelists
  }

  // Return a single observable insurelist
  getInsurelist(key: string): FirebaseObjectObservable<Insurelist> {
    const insurelistPath = `${this.basePath}/${key}`;
    this.insurelist = this.db.object(insurelistPath)
    return this.insurelist
  }
  
  

  // Create a bramd new insurelist
  createInsurelist(insurelist: Insurelist): void {
    this.insurelists.push(insurelist)
      .catch(error => this.handleError(error))
  }


  
  
  // Update an exisiting insurelist
  updateInsurelist(key: string, value: any): void {
    this.insurelists.update(key, value)
      .catch(error => this.handleError(error))
  }

  // Deletes a single insurelist
  deleteInsurelist(key: string): void {
    this.insurelists.remove(key)
      .catch(error => this.handleError(error))
  }

  // Deletes the entire list of insurelist
  deleteAll(): void {
    this.insurelists.remove()
      .catch(error => this.handleError(error))
  }


  // Default error handling for all actions
  private handleError(error:any) {
    console.log(error)
  }


}
