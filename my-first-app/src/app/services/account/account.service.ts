import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from '../logging/logging.service';

export interface serverType {
  type: string;
  name: string;
  content: string
}

@Injectable()
export class AccountService {
  private allservers: serverType[]=[];
  mycheck = new EventEmitter<string>();

  constructor(private logservice : LoggingService) {
    this.allservers = [{name:'cicozz', type:'bull', content: 'strip'}];
  }

  addServer(newserver: serverType){
    this.allservers.push(newserver);
    this.logservice.logStatusChanged("new server was added");
  }
  deleteServer(){
    let temp = this.allservers.pop();
    this.logservice.logStatusChanged("server was deleted");
    this.mycheck.emit(temp.name);
  }
  getServers(): serverType[] {
    return this.allservers;
  }
}
