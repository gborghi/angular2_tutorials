import { ViewChild, ElementRef, Component, OnInit, OnChanges, Renderer2, ContentChild } from '@angular/core';
import { serverType, AccountService } from './services/account/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: ['']
})

export class AppComponent implements OnInit, OnChanges {

  notopen = false;
  title : string = 'giovannis-app';
  serverdata : serverType[];
  @ViewChild('appcomponent') maindiv: ElementRef;

  constructor(
    private accountService: AccountService,
    private renderer: Renderer2
  ){
    this.accountService.mycheck.subscribe(
      (string)=> {this.title=this.title+string}
    );
  };
  ngOnInit(){
    this.serverdata = this.accountService.getServers();
  };

  ngOnChanges(){};

  onServersChange(){
    //let notopen = this.maindiv.nativeElement.classList.contains('nopen');
    //this.renderer.setAttribute(this.maindiv.nativeElement, 'class', notopen ? '': 'nopen');
    this.notopen=!this.notopen;
    this.renderer.setStyle(this.maindiv.nativeElement, 'background-color', !this.notopen ? 'yellow': 'transparent');
  }
}
