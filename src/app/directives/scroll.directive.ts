import { AfterViewInit, Directive, ElementRef, HostListener, Input, NgZone, OnInit } from '@angular/core';

@Directive({
    selector: '[appScroll]'
})

export class ScrollDirective implements AfterViewInit {
    @Input('appScroll') scrollClass: string;
    @Input() repeat: boolean;
    @Input() delay: number;
    el: ElementRef;
    constructor(private element: ElementRef,private ngZone: NgZone) {

        this.el = element;
        console.log(this.el);
    }
    ngAfterViewInit() {
        setTimeout(this.animOnScroll, 500, this.element, this.offset, this.scrollClass, this.repeat, this.delay);
    }
    @HostListener("window:scroll", [])
    animOnScroll(elementRef,functionOffset,scrollClass,repeat,delay) {
        let element = this.element ?? elementRef;
        let offset = this.offset ?? functionOffset;
        if(!element){
            return;
        }
        if(!this.delay){
            this.delay = 0;
        }
        delay = this.delay ?? delay;
        scrollClass = this.scrollClass ?? scrollClass;
        repeat = this.repeat ?? repeat;
        const animItem = element.nativeElement;
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;
        console.log(animItem.offsetHeight);

        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }
        if (repeat) {
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                setTimeout(function () {
                    animItem.classList.add(scrollClass);
                }, delay)
            }
            else {
                animItem.classList.remove(scrollClass);
            }
        }
        else {
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                setTimeout(function () {
                    if (!animItem.classList.contains(scrollClass))
                        animItem.classList.add(scrollClass);
                }, delay);
                this.animOnScroll = function() : void {};
            }
        }
    }

    offset(el) {
        const rect = el.getBoundingClientRect(), scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
}