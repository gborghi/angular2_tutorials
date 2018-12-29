import { ViewChild, ElementRef, Component, EventEmitter, Output } from '@angular/core';
import { CollapseDirective } from '../shared/dropdown.directive'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();
  @ViewChild('toclick') elref;

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  toChildClick(elref){
    //console.log(elref.constructor.name);
    this.elref.nativeElement.click();
    //console.log(elref);
  }

}
