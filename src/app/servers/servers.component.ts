import { Inject, Component, OnInit, ViewChild, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { serverType } from '../account.service';
import {LoggingService} from '../logging.service';
import {AccountService} from '../account.service';
//import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: ['.nopen {display: none}'],
  providers: [LoggingService, AccountService],
})

export class ServersComponent implements OnInit {
  @Output() newserverCreated = new EventEmitter<serverType[]>();
  allowNewServer = false;
  serverNumber: number = 10;
  serverCreationStatus: string = "no server was created";
  serverName: string = "";
  serverCreated=false;
  @ViewChild('servertype') whichtype;

  ngOnInit (){};

  constructor (@Inject(AccountService) private accountService, private loggingService : LoggingService){
    setTimeout (() => {
      this.allowNewServer = true;
    }, 3000)
  };

  getServerNumber() {
    return this.serverNumber;
  };

  onDeleteServer(){
    this.accountService.deleteServer();
  }

  onCreateServer(inputTag : HTMLInputElement) {
    this.serverCreated=true;
    let newserver : serverType = {
      type: this.whichtype.nativeElement.value,
      name: this.serverName,
      content: inputTag.value,
    };
//    this.servers.push(newserver);
    this.accountService.addServer(newserver);
    this.newserverCreated.emit(this.accountService.updateEvent());
    this.serverNumber = Math.random()*1000;
    this.serverCreationStatus = "server was created! "+this.serverName;
    this.loggingService.logStatusChanged("new server created!!")
  };

  onUpdateServerName(event: any){
    this.serverName = event.target.value;
  }
}
