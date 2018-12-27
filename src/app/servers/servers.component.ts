import { Component, OnInit, ViewChild, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { serverType } from '../app.component'

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  encapsulation: ViewEncapsulation.None,
  //styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})

export class ServersComponent implements OnInit {
  @Output() newserverCreated = new EventEmitter<serverType>();
  allowNewServer = false;
  serverStatus: number = 10;
  serverCreationStatus: string = "no server was created";
  serverName: string = "";
  servers : serverType[]=[];
  serverCreated=false;
  @ViewChild('servertype') whichtype;

  ngOnInit (){};

  constructor (){
    setTimeout (() => {
      this.allowNewServer = true;
    }, 3000)
  };

  getServerStatus() {
    return this.serverStatus;
  };

  onCreateServer(inputTag : HTMLInputElement) {
    this.serverCreated=true;
    let newserver : serverType = {
      type: this.whichtype.nativeElement.value,
      name: this.serverName,
      content: inputTag.value,
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
