import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  //styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})

export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverID: string = 'giovannis-server';
  serverStatus: number = 10;
  serverCreationStatus: string = "no server was created";
  serverName: string = "";
  servers=[];
  text="";

  ngOnInit (){};

  constructor (){
    setTimeout (() => {
      this.allowNewServer = true;
    }, 3000)
  };

  getServerStatus() {
    return this.serverStatus;
  };

  onCreateServer() {
    this.serverCreationStatus = "server was created!";
    this.text = this.serverID;
  };

  onUpdateServerName(event: any){
    console.log(event);
    this.serverName = event.target.value;
    this.text=this.serverName;
  }
}
