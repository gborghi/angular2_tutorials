import { OnInit, Input, Directive, HostListener, HostBinding, ElementRef } from '@angular/core';
import { AidClass } from './aid.module'

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}

@Directive({
  selector: '[appCollapse]',
  providers: [AidClass]
})
export class CollapseDirective {
  //@HostBinding('class.collapse') iscollapsed = true;
  private _totoggle;
  @Input('appCollapse') set totoggle(instring:string){
    instring ? this._totoggle=instring : this._totoggle='collapse';
  };

  constructor(private aid: AidClass){
    //this.totoggle = 'collapse';
  };

  ngOnInit(){
    //this.totoggle = 'collapse';
  }

  @HostListener('click', ['$event']) toggleOpen(event: any) {
    console.log(this._totoggle);
    this.aid.toggleClass(event.target,this._totoggle)
  }
}
