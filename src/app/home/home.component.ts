import {
  Component,
  ElementRef,
  inject,
  viewChild,
  OnInit,
  AfterViewInit
} from '@angular/core';
import { CommonModule } from '@angular/common'; // Fix missing import

import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CommonService } from './shared/commonService/common.service'; // Correct relative path

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ProfileComponent,
    AboutComponent,
    ExperienceComponent,
    PortfolioComponent,
    ContactComponent,
    TestimonialComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, AfterViewInit {
  commonService = inject(CommonService);

  about = viewChild<ElementRef>('about');
  portfolio = viewChild<ElementRef>('portfolio');
  contact = viewChild<ElementRef>('contact');

  ngOnInit(): void {
    // Initialization
  }

  ngAfterViewInit(): void {
    this.commonService.events = {
      about: this.about(),
      portfolio: this.portfolio(),
      contact: this.contact(),
    };
  }
}
