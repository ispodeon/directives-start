import {
  Directive, 
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  HostBinding,
  Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'blue'; /** alias is the same as the selector so you can bind name with square brackets on the element
                                                                    this allows you to add the directive and set a property at the same time */ 
                                                                    
                                                                                     //                                                      _____________                        //
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor; // you can bind to any value on the nativeElement when using HostBinding //
                                                                                     //                                                      _____________                        // 

  constructor(private etRef: ElementRef, private renderer: Renderer2 ) { } 
  // commented out section uses renderer, then hostbinding, finally custom properties(input/property binding)

  ngOnInit() {
    // this.renderer.setStyle(this.etRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) { // convenient way of listening to events on the element
    // this.renderer.setStyle(this.etRef.nativeElement, 'background-color', 'blue');
    // this.backgroundColor = 'blue';
    this.backgroundColor = this.highlightColor;
    
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) { // convenient way of listening to events on the element
    // this.renderer.setStyle(this.etRef.nativeElement, 'background-color', 'transparent');
    // this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }

}
