import { Injectable } from '@angular/core';
import { LoggingService } from '../logging/logging.service';

export interface serverType {
  type: string;
  name: string;
  content: string
}

@Injectable() 
export class AccountService {
  private allservers: serverType[]=[];
  constructor(private logservice : LoggingService) {
    this.allservers = [{name:'cicozz', type:'bull', content: 'strip'}];
  }

  addServer(newserver: serverType){
    this.allservers.push(newserver);
    this.logservice.logStatusChanged("new server was added");
  }
  deleteServer(){
    this.allservers.pop();
    this.logservice.logStatusChanged("server was deleted");
  }
  getServers(): serverType[] {
    return this.allservers;
  }
}
