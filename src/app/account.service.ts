import { Injectable, EventEmitter } from '@angular/core';

export interface serverType {
  type: string;
  name: string;
  content: string
}

@Injectable()
export class AccountService {
  public serverchanged = new EventEmitter<serverType[]>();
  private allservers: serverType[];
  constructor() {
  }

  addServer(newserver: serverType){
    this.allservers.push(newserver);
  }
  deleteServer(){
    this.allservers.pop();
  }
  getServers(){
    return this.allservers;
  }
  updateEvent(){
    this.serverchanged.emit(this.getServers());
  }

}
