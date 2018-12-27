import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }'
  `]
})

export class ServerComponent implements OnInit {
  @Input() element: {type: string, name: string, content: string};
  //@Input() element: string;
  @Input() parameter: string;
  temp: string = "";

  serverId: number = 10;
  serverStatus: string = 'offline';

  ngOnInit (){
    console.log(this.element);
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
