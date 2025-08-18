import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, RendererFactory2, inject, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import {MatRippleModule} from '@angular/material/core';

import { CommonService } from '@shared/commonService/common.service';
import { SeoService } from '@shared/seo-service/seo.service';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, MatRippleModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {

  meta = inject(Meta)


  title = 'aswinthgt';
  rootElement = viewChild("root", {read: ElementRef});
  commonservice = inject(CommonService);
  metaService = inject(SeoService);


  ngOnInit(): void {
    this.metaService.updateSEO({});
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit(): void {
    this.commonservice.rootElement = this.rootElement()
  }

}
