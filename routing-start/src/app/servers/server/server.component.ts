import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit, AfterViewInit {
  @ViewChild('pressedit') editbutton: ElementRef;
  server: {id: number, name: string, status: string};
  canedit: boolean = false;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router,
    private renderer: Renderer2
  ) { }

  ngAfterViewInit(){
    //console.log(this.canedit);
    this.updateEditButton();
    //console.log(this.editbutton.nativeElement);
  }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.canedit = +this.route.snapshot.queryParams['allowEdit']===1? true:false;
    this.server = this.serversService.getServer(id);
    this.route.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params['id']);
      }
    );
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.canedit = +params['allowEdit']===1 ? true : false;
        this.updateEditButton();
      }
    );
  }

  onEdit(){
    this.canedit ? this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'}) : () => {};
  }

  updateEditButton(){
        if(this.canedit){
          this.renderer.addClass(this.editbutton.nativeElement, 'active');
          this.renderer.removeClass(this.editbutton.nativeElement, 'disabled');
        } else {
          this.renderer.addClass(this.editbutton.nativeElement, 'disabled');
          this.renderer.removeClass(this.editbutton.nativeElement, 'active');
        }
  }
}
