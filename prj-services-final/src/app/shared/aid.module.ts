import { Component, Renderer2, ElementRef, Injectable } from '@angular/core';

@Injectable()
export class AidClass {
  constructor(private renderer : Renderer2){}

  toggleClass(el : HTMLElement, myclass : string) {
    console.log("toggled");
    el.classList.contains(myclass) ? this.renderer.removeClass(el,myclass): this.renderer.addClass(el,myclass);
  }

}
