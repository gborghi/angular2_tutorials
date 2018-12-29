import { Component, OnInit, Input, AfterViewInit, ContentChild } from '@angular/core';
import { serverType } from '../../services/account/account.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }'
  `]
})
export class ServerComponent implements OnInit, AfterViewInit {
  @Input() element: serverType;
  //@Input() element: string;
  @Input() servernumber: number;
  @ContentChild('pistick') paragraph;
  temp: string = "";

  serverId: number = 10;
  serverStatus: string = 'offline';

  ngOnInit (){
    //console.log(this.paragraph.nativeElement.html);
  };

  ngAfterViewInit (){
    this.paragraph.nativeElement.textContent=this.servernumber;
  };

  constructor(){
    this.serverStatus = Math.random() > 0.5 ? "online": "offline";
//    this.element = {type: 'carlo', name: "past", content: "whatever"};
  };

  getServerStatus() {
    return this.serverStatus;
  };

  getServerName(){
    return this.element.name;
  };

  getColor(){
    return this.serverStatus === 'online'? 'green' : 'blue';
  };
}
