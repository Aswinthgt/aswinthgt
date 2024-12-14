import { Component, ElementRef, inject, viewChild } from '@angular/core';

import { ProfileComponent } from '@profile/profile.component';
import { AboutComponent } from '@about/about.component';
import { TopBarComponent } from '@top-bar/top-bar.component';
import { ExperienceComponent } from '@experience/experience.component';
import { TestimonialComponent } from '@testimonial/testimonial.component';
import { ContactComponent } from '@contact/contact.component';
import { PortfolioComponent } from '@portfolio/portfolio.component';
import { CommonService } from '@shared/commonService/common.service';
// import { ResumeComponent } from '@resume/resume.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [ProfileComponent, TopBarComponent, AboutComponent, PortfolioComponent, ExperienceComponent, TestimonialComponent, ContactComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {

  commonService = inject(CommonService);


  about = viewChild("about", { read: ElementRef });
  portfolio = viewChild("portfolio", { read: ElementRef });
  contact = viewChild("contact", { read: ElementRef });

  

  ngAfterViewInit(): void {
    this.commonService.events.about = this.about();
    this.commonService.events.portfolio = this.portfolio();
    this.commonService.events.contact = this.contact();
  }


  
}
