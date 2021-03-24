import {Directive, AfterViewInit, OnDestroy, Input} from "@angular/core";

@Directive({
  selector: '[add-class]'
})
export class AddClassDirective implements AfterViewInit, OnDestroy {
  @Input('add-class')
  className: string;

  @Input('to')
  selector: string;

  ngOnDestroy(): void {
    document.querySelector(this.selector).classList.remove(this.className);
  }

  ngAfterViewInit(): void {
      console.log('start');
    document.querySelector(this.selector).classList.add(this.className);
  }
}