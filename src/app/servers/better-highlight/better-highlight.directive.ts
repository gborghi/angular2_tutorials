import { Directive, Renderer2, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elref: ElementRef, private renderer: Renderer2){
  }
  ngOnInit(){
    this.renderer.setStyle(this.elref.nativeElement, 'background-color','blue');
  }
}
