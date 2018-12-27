import { Component, OnInit, ViewEncapsulation } from '@angular/core';

export interface serverType {
  type: string;
  name: string;
  content: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title : string = 'giovannis-app';
  serverdata : serverType[] = [];

  ngOnInit(){};

  onNewServer(newserver : serverType){
    this.serverdata.push(newserver);
  }

  listServers() {
    let names : string = "";
    for(let i: number =0; i < this.serverdata.length; i++){
      names=names+this.serverdata[i].name;
    }
    return names;
  }
}
