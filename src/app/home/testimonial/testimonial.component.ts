import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [MatIconModule],
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
