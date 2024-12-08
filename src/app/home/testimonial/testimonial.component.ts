import { Component } from '@angular/core';

@Component({
    selector: 'app-testimonial',
    standalone: true,
    imports: [],
    templateUrl: './testimonial.component.html',
    styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent {
  testimonial = {
    appreciation: "Within the realm of technology, Aswinth shines as a developer extraordinaire, consistently delivering innovative solutions. Their expertise and dedication set a high standard, inspiring peers in the community.",
    by: 'Suji Kumar',
    byPosition: 'Associate Architect, _G10X'
  }

}
