import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'blue';
  @Input() textHighlightColor: string = 'red';

  private howmany: number=0;

  constructor(
    private elref: ElementRef,
    private renderer: Renderer2){
  }

  ngOnInit(){
    this.renderer.setStyle(this.elref.nativeElement, 'background-color','green');
  }

  @HostBinding('style.color') textColor: string = "black";
  @HostBinding('class.nopen') notOpen: boolean = false;

  @HostListener('mouseover') mousover(eventData: Event){
        this.renderer.setStyle(this.elref.nativeElement, 'background-color',this.highlightColor);
        if(this.howmany>3){
          this.textColor=this.textHighlightColor;
          if(this.howmany>8){
            this.notOpen=true;
          }
        }
        console.log(this.howmany);
        this.howmany=this.howmany+1;
  }
  @HostListener('mouseleave') mousout(eventData: Event){
        this.renderer.setStyle(this.elref.nativeElement, 'background-color','transparent');
  }
}
