import { Inject, Component, OnInit, ViewChild, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { serverType } from '../account.service';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';
//import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: ['.nopen {display: none}'],
  providers: [LoggingService, AccountService],
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

  ngOnInit (){};

  constructor (private accountService : AccountService, private loggingService : LoggingService){
    setTimeout (() => {
      this.allowNewServer = true;
    }, 3000)
  };

  getfake(){
    return [{
      type: 'pistol',
      name: 'pistol',
      content: 'pistol',
    }]
  }

  getServerNumber() {
    return this.serverNumber;
  };

  onDeleteServer(){
    this.accountService.deleteServer();
    this.serverChanged.emit(this.accountService.getServers());
    this.localservers = this.accountService.getServers();
  }

  onCreateServer(inputTag : HTMLInputElement) {
    this.serverCreated=true;
    let newserver : serverType = {
      type: this.whichtype.nativeElement.value,
      name: this.serverName,
      content: inputTag.value,
    };
    this.accountService.addServer(newserver);
    this.serverChanged.emit(this.accountService.getServers());
    this.localservers = this.accountService.getServers();

    this.serverNumber = Math.random()*1000;
    this.serverCreationStatus = "server was created! "+this.serverName;
    this.loggingService.logStatusChanged("new server created!!")
  };

  onUpdateServerName(event: any){
    this.serverName = event.target.value;
  }
}
