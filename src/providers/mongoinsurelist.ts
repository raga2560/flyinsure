import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject'; 
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { environment } from '../config/environment';
import { Insurelist } from '../pages/transaction-shared/insurelist';

import * as io from 'socket.io-client';

let storage = environment.storage;
//let tableName = environment.insurancerec.singlerec.insurancelist;
// Core



@Injectable()
export class MongoInsurelistService {

  private basePath = '/tmp';

  socket:any;  
  observer:Observer<any>;  

  insurelists: Observer<Insurelist[]> ; //= null; //  list of objects
  insurelist: Observer<Insurelist> ; // = null; //   single object

/*
  constructor( ) { 
  
  this.socket = io('http://127.0.0.1:8081/calldatabase'); 

  this.socket.on('allTodos', (msg:any) => {
	alert(msg);	
  });

 var abc = {
	name:'ramesh'
  };
  this.socket.emit('saveTodo', abc);
	  
  }

*/


  

  constructor() { 
  // alert('second');
      // this.basePath = any ; //tableName;
      this.socket = io('http://127.0.0.1:8081/calldatabase'); 
//	  this.insurelists = [];
  }

 // http://www.syntaxsuccess.com/viewarticle/socket.io-with-rxjs-in-angular-2.0
  // Return an observable list with optional query
  // You will usually call this from OnInit in a component
  getInsurelistsList(query = {}): Observable<Insurelist[]> {

   this.socket.on('listall', (res) => {
      this.insurelists.next(res);
      // this.observer.complete();
    });
	
	    
    this.socket.emit('listall', query);


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
    this.socket.emit('push', insurelist);
  }


  createErrorObservable() : Observable<any> {
      return Observable.create((observer: Observer<any>) => {
        this.observer = observer;
      });
  }  
  
  getInsurelist(key: string): Observable<Insurelist> {
    var datatoget = {
	_id : key
    };
   this.socket.on('listall', (res) => {
      this.observer.next(res);
      // this.observer.complete();
    });

    this.socket.emit('get', datatoget);
    return this.getObservable();
  }


  
  // Update an exisiting insurelist
  updateInsurelist(key: string, value: any): void {
    var datatoupdate = {
	data: value,
	_id : key
    };
    this.socket.emit('update', datatoupdate);
  }



  // Deletes a single insurelist
  deleteInsurelist(key: string): void {
    var datatodelete = {
	_id : key
    };
    this.socket.emit('remove', datatodelete);
  }

  // Deletes the entire list of insurelist
  deleteAll(): void {
    this.socket.emit('removeall');
  }


  // Default error handling for all actions
  private handleError(error:any) {
    console.log(error)
  }


}
