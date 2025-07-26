import {
  AfterViewInit,
  Directive,
  EventEmitter,
  ElementRef,
  Output,
} from '@angular/core';

@Directive({
  selector: '[intersectionObserver]',
})
export class InterSectionObserver implements AfterViewInit {
  constructor(private element: ElementRef) {}

  @Output() intersectionObserver = new EventEmitter<any>();

  ngAfterViewInit() {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.intersectionObserver.emit(true);
        observer.unobserve(this.element.nativeElement); // Only once
      }
    });
    observer.observe(this.element.nativeElement);
  }
}
