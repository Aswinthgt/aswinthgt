import { AfterViewInit, Component, ElementRef, OnInit, inject, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonService } from './home/service/commonService/common.service';
import { Meta } from '@angular/platform-browser';
import { SeoService } from './home/service/seo-service/seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {

  meta = inject(Meta)

  title = 'aswinthgt';
  rootElement = viewChild("root", {read: ElementRef});
  commonservice = inject(CommonService);
  metaService = inject(SeoService)


  ngOnInit(): void {
    this.metaService.updateSEO({})
  }

  ngAfterViewInit(): void {
    this.commonservice.rootElement = this.rootElement()
  }
}
