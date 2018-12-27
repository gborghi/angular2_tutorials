import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { serverType } from '../app.component'

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  //styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})

export class ServersComponent implements OnInit {
  @Output() newserverCreated = new EventEmitter<serverType>();
  allowNewServer = false;
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
    let newserver : serverType = {
      type: "ciccio",
      name: this.serverName,
      content: "generico"
    };
    this.servers.push(newserver);
    this.newserverCreated.emit(newserver);
    //console.log(this.servers);
    this.serverCreationStatus = "server was created! "+this.serverName;
  };

  onUpdateServerName(event: any){
    this.serverName = event.target.value;
  }
}
