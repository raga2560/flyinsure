import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject'; 
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { environment } from '../config/environment';
import { Insurelist } from '../pages/transaction-shared/insurelist';

import * as io from 'socket.io-client';

let storage = environment.storage;



let insurerectype = environment.insurancerec.type;




@Injectable()
export class MongoInsurelistService {

  private basePath = '/tmp';
  recordname: any;

  socket:any;  
  observer:Observer<any>;  

  insurelists: Observer<Insurelist[]> ; //= null; //  list of objects
  insurelist: Observer<Insurelist> ; // = null; //   single object



  

  constructor() { 
    this.socket = io('http://127.0.0.1:8081/calldatabase'); 
	if(insurerectype == 'single')
	{
	  this.recordname = environment.insurancerec.singlerec.insurancelist; 
	}

  }

 // http://www.syntaxsuccess.com/viewarticle/socket.io-with-rxjs-in-angular-2.0
  // Return an observable list with optional query
  // You will usually call this from OnInit in a component
  getInsurelistsList(query = {}): Observable<Insurelist[]> {

   this.socket.on('listall', (res) => {
      this.insurelists.next(res);
      // this.observer.complete();
    });
	
	var listalldata = {
		query: query,
		recordname: this.recordname
	};
	    
    this.socket.emit('listall', listalldata);


    return this.createObservable();
  }

  createObservable() : Observable<Insurelist[]> {
      return Observable.create((observer: Observer<Insurelist[]>) => {
        this.insurelists = observer;
      });
  }
  
  getObservable() : Observable<Insurelist> {
      return Observable.create((observer: Observer<Insurelist>) => {
        this.insurelist = observer;
      });
  }
  
  
  

  // Create a bramd new insurelist
  createInsurelist(insurelist: Insurelist): void {
	  var pushdata = {
		data: insurelist,
		recordname: this.recordname
	};
	    
    this.socket.emit('push', pushdata);
  }


  createErrorObservable() : Observable<any> {
      return Observable.create((observer: Observer<any>) => {
        this.observer = observer;
      });
  }  
  
  getInsurelist(key: string): Observable<Insurelist> {
    var datatoget = {
			recordname: this.recordname,
	id : key
    };
	
    this.socket.on('gotdata', (res) => {
      this.insurelist.next(res);
    
    });

    this.socket.emit('get', datatoget);
    return this.getObservable();
  }


  
  // Update an exisiting insurelist
  updateInsurelist(key: string, value: any): void {
    var datatoupdate = {
	recordname: this.recordname,
	data: value,
	id : key
    };
	
	this.socket.on('returndata', (res) => {
      console.log(res);
      
    });

	
    this.socket.emit('update', datatoupdate);
  }



  // Deletes a single insurelist
  deleteInsurelist(key: string): void {
    var datatodelete = {
	recordname: this.recordname,
	id : key
    };
	
	this.socket.on('returndata', (res) => {
      console.log(res);
      
    });
	
    this.socket.emit('remove', datatodelete);
  }

  // Deletes the entire list of insurelist
  deleteAll(): void {
	var recordtodelete = {
		recordname: this.recordname
	
    };
	this.socket.on('returndata', (res) => {
      console.log(res);
      
    });	
    this.socket.emit('removeall', recordtodelete);
  }


  // Default error handling for all actions
  private handleError(error:any) {
    console.log(error)
  }


}
