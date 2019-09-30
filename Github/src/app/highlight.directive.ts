// import { Directive } from '@angular/core';

// @Directive({
//   selector: '[appHighlight]'
// })
// export class HighlightDirective {

//   constructor() { }

// }
import { Directive, ElementRef, Input  } from '@angular/core';
import { User } from './user-class/user'
import { DisplayComponent } from './display/display.component'

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() user: User;

  constructor(private elem: ElementRef) {
    this.elem.nativeElement.style.backgroundColor = '#17a2b8';
  }
}
