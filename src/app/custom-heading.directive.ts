import { Directive, HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomHeading]'
})
export class CustomHeadingDirective {

  constructor(private el:ElementRef) { }
  // @HostListener('mouseenter') MouseEnter(){
  //   console.log('Mouse In')
  // }
  @HostListener('mouseenter') MouseEnter(){
    this.el.nativeElement.style.fontSize = '20px'
  }
  @HostListener('mouseleave') MouseLeave(){
    this.el.nativeElement.style.fontSize = '16px'
  }
}
