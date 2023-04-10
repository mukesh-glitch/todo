import { Directive,ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  @Input() appHighlighter!:string;
  constructor(private element:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.colorChange(this.appHighlighter);
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.colorChange('');
  }
  
  private colorChange(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }

}
