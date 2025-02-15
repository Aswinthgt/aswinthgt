import {
  Component,
  ElementRef,
  HostListener,
  inject,
  signal,
  viewChild,
  ViewContainerRef,
} from '@angular/core';

import { ProfileComponent } from '@profile/profile.component';
import { AboutComponent } from '@about/about.component';
import { TopBarComponent } from '@top-bar/top-bar.component';
import { ExperienceComponent } from '@experience/experience.component';
import { TestimonialComponent } from '@testimonial/testimonial.component';
import { ContactComponent } from '@contact/contact.component';
import { PortfolioComponent } from '@portfolio/portfolio.component';
import { CommonService } from '@shared/commonService/common.service';
import { MobileProfileComponent } from './profile/mobile-profile/mobile-profile.component';
// import { ResumeComponent } from '@resume/resume.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TopBarComponent,
    AboutComponent,
    PortfolioComponent,
    ExperienceComponent,
    TestimonialComponent,
    ContactComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  commonService = inject(CommonService);

  about = viewChild('about', { read: ElementRef });
  portfolio = viewChild('portfolio', { read: ElementRef });
  contact = viewChild('contact', { read: ElementRef });
  profileContainer = viewChild('profilecontainer', { read: ViewContainerRef });

  isMobile = signal<boolean | null>(null);

  ngOnInit(): void {
    // for SSR
    this.profileContainer()?.createComponent(ProfileComponent);
  }

  ngAfterViewInit(): void {
    this.loadProfile(this.commonService.isMobileUsingResolution());
    this.commonService.events = {
      about: this.about(),
      portfolio: this.portfolio(),
      contact: this.contact(),
    }
  }

  loadProfile(isMobile: boolean): void {
    this.profileContainer()?.clear();
    const componentRef = isMobile ? MobileProfileComponent : ProfileComponent;
    this.profileContainer()?.createComponent(componentRef);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const result = event.target.innerWidth <= 768;
    if (this.isMobile() !== result) {
      this.isMobile.set(result);
      this.loadProfile(result);
    }
  }
}
