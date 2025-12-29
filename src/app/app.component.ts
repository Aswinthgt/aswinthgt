import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, RendererFactory2, inject, viewChild, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { MatRippleModule } from '@angular/material/core';

import { isPlatformBrowser } from '@angular/common';
import { CommonService } from './home/shared/commonService/common.service';
import { SeoService } from './home/shared/seo-service/seo.service';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TopBarComponent } from './home/top-bar/top-bar.component';


import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatRippleModule, TopBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {

  meta = inject(Meta)


  title = 'aswinthgt';
  rootElement = viewChild("root", { read: ElementRef });
  commonservice = inject(CommonService);
  metaService = inject(SeoService);


  platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    this.metaService.updateSEO({});
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrollTrigger);
      AOS.init({
        duration: 1200,
        easing: 'ease-out-cubic',
        once: false,
        mirror: true,
        disable: false // Ensure enabled on all devices
      });
    }
  }

  ngAfterViewInit(): void {
    this.commonservice.rootElement = this.rootElement()
    this.commonservice.setTheme()
  }

}
