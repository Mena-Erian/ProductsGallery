import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  EventEmitter,
  ElementRef,
  Output,
  PLATFORM_ID,
  inject,
} from '@angular/core';

@Directive({
  selector: '[intersectionObserver]',
})
export class InterSectionObserver implements AfterViewInit {
  constructor(private element: ElementRef) {}
  pLATFORM_ID = inject(PLATFORM_ID);
  @Output() intersectionObserver = new EventEmitter<any>();

  ngAfterViewInit() {
    if (isPlatformBrowser(this.pLATFORM_ID)) {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          this.intersectionObserver.emit(true);
          observer.unobserve(this.element.nativeElement); // Only once
        }
      });
      observer.observe(this.element.nativeElement);
    }
  }
}
