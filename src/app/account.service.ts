import { Injectable } from '@angular/core';

export interface serverType {
  type: string;
  name: string;
  content: string
}

export class AccountService {
  private allservers: serverType[]=[];
  constructor() {
    this.allservers = [{name:'cico', type:'bull', content: 'strip'}];
  }

  addServer(newserver: serverType){
    this.allservers.push(newserver);
  }
  deleteServer(){
    this.allservers.pop();
  }
  getServers(): serverType[] {
    return this.allservers;
  }
}
