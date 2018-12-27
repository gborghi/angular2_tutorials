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
  servers=[{
    type: "ciccio",
    name: "caio",
    content: "mi stuzzichi"
  },
  {
    type: "cesare",
    name: "sempronio",
    content: "ti mangerei"
  }];
  //servers=[1,2,3]
  text="";
  serverCreated=false;

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
    this.serverCreated=true;
    this.servers.push({
      type: "ciccio",
      name: this.serverName,
      content: "generico"
    });
    //console.log(this.servers);
    this.serverCreationStatus = "server was created! "+this.serverName;
  };

  onUpdateServerName(event: any){
    this.serverName = event.target.value;
  }
}
