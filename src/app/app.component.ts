import { AfterViewInit, Component, ElementRef, inject, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonService } from './home/service/commonService/common.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {

  title = 'aswinthgt';
  rootElement = viewChild("root", {read: ElementRef});
  commonservice = inject(CommonService)

  ngAfterViewInit(): void {
    this.commonservice.rootElement = this.rootElement()
  }
}
