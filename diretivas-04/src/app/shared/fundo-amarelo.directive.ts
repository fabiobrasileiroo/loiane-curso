<<<<<<< HEAD
import { Directive } from '@angular/core';

@Directive({
  selector: '[appFundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor() { }
=======
import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'p[FundoAmarelo]'
})
export class FundoAmareloDirective {
  
  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2
    ) {// fez a injeção de depêndencia
    //console.log(this._elementRef) 
    //this._elementRef.nativeElement.style.backgroundColor = 'yellow'
    this._renderer.setStyle(_elementRef.nativeElement, 'background-color', 'yellow');
  }
>>>>>>> origin/main

}
