import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  //styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})

export class ServerComponent implements OnInit {
  allowNewServer = false;
  serverID: string = 'giovannis-server';
  serverStatus: number = 10;
  serverCreationStatus: string = "no server was created";
  serverName: string = "";
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
  };

  onUpdateServerName(event: any){
    console.log(event);
    this.serverName = event.target.value;
  }
}
