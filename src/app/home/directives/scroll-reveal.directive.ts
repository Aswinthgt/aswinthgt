import { Directive, ElementRef, inject, OnInit, OnDestroy } from '@angular/core';

@Directive({
    selector: '[appScrollReveal]',
    standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
    private el = inject(ElementRef);
    private observer: IntersectionObserver | undefined;

    ngOnInit() {
        // FAIL-SAFE: Only hide if we are about to observe.
        // Prevent initial animation (Fade Out) by disabling transition temporarily.
        if (this.el.nativeElement.classList.contains('scroll-reveal-item')) {
            this.el.nativeElement.style.transition = 'none';
            this.el.nativeElement.classList.add('sr-hidden');

            // Force reflow
            void this.el.nativeElement.offsetWidth;

            // Restore transition (next frame or immediately after reflow)
            this.el.nativeElement.style.transition = '';
        }

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.el.nativeElement.classList.add('in-view');
                    this.el.nativeElement.classList.remove('sr-hidden');
                } else {
                    // Start fresh if user scrolls back up (optional, matches "Selected Work" usually if they want replay)
                    // The Portfolio CSS implies transition on 'in-view'. 
                    // If we remove it, it animates out.
                    this.el.nativeElement.classList.remove('in-view');

                    // Re-add hidden state only for global items to reset animation
                    if (this.el.nativeElement.classList.contains('scroll-reveal-item')) {
                        this.el.nativeElement.classList.add('sr-hidden');
                    }
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '-50px'
        });

        this.observer.observe(this.el.nativeElement);
    }

    ngOnDestroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}
