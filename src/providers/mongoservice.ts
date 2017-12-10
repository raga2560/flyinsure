import { Injectable } from '@angular/core';

import { environment } from '../config/environment';

import * as io from 'socket.io-client';

let storage = environment.storage;

// Core



@Injectable()
export class MongoService {

 socket:any;  

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




}
