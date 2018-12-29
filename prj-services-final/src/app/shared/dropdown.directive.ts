import { Directive, HostListener, HostBinding } from '@angular/core';

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
  selector: '[appCollapse]'
})

export class CollapseDirective {
  @HostBinding('class.collapse') iscollapsed = true;
  @HostListener('click') toggleOpen() {
    console.log('clicked');
    this.iscollapsed = !this.iscollapsed;
  }
}
