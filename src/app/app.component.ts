import { Component, OnInit } from '@angular/core';
import { serverType } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title : string = 'giovannis-app';
  serverdata : serverType[] = [];

  ngOnInit(){};

  onNewServer(newserverdata : serverType[]){
    this.serverdata=newserverdata;
  }

  listServers() {
    let names : string = "";
    for(let i: number =0; i < this.serverdata.length; i++){
      names=names+this.serverdata[i].name;
    }
    return names;
  }
}
