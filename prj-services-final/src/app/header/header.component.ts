import { Renderer2, ViewChild, ElementRef, Component, EventEmitter, Output } from '@angular/core';
import { CollapseDirective } from '../shared/dropdown.directive'
import { AidClass } from '../shared/aid.module'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: ['.redback {background-color: red}'],
  providers: [AidClass]
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();
  //@ViewChild('toclick') elref;

  constructor(private toggler: AidClass){}

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  toChildClick(elref : HTMLElement){
    elref.dispatchEvent(new CustomEvent('click'));
  }

}
