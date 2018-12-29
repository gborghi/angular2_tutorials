import { Component, OnInit, ViewChild, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { serverType, AccountService } from '../../services/account/account.service';
//import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: ['.nopen {display: none}']
})

export class ServersComponent implements OnInit {
  @Output() serverChanged = new EventEmitter<serverType[]>();
  allowNewServer = false;
  serverNumber: number = 10;
  serverCreationStatus: string = "no server was created";
  serverName: string = "";
  serverCreated=false;
  @ViewChild('servertype') whichtype;
  localservers : serverType[];

  ngOnInit (){
    this.localservers = this.accountService.getServers();
  };

  constructor (private accountService : AccountService){
    setTimeout (() => {
      this.allowNewServer = true;
    }, 3000)
  };

  getServerNumber() {
    return this.serverNumber;
  };

  updateServers(){
//    this.localservers = this.accountService.getServers();
//    this.serverChanged.emit(this.accountService.getServers());
//    console.log(this.localservers.length);
  }

  onDeleteServer(){
    this.accountService.deleteServer();
    this.updateServers();
  }

  onCreateServer(inputTag : HTMLInputElement) {
    this.serverCreated=true;
    let newserver : serverType = {
      type: this.whichtype.nativeElement.value,
      name: this.serverName,
      content: inputTag.value,
    };
    this.accountService.addServer(newserver);
    this.updateServers();

    this.serverNumber = Math.random()*1000;
    this.serverCreationStatus = "server was created! "+this.serverName;
  };

  onUpdateServerName(event: any){
    this.serverName = event.target.value;
  }
}
