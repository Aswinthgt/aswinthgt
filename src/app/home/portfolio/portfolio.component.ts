import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import { PortfolioData } from '../../models/models';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [MatRippleModule, MatIconModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {

platformId = inject(PLATFORM_ID)

textShort(text:string){
    if(text.length > 75){
        text = text.slice(0,75)
        text += "..."
        return text;
    }else{
      return text
    }
}

goTo(url:string){
  (window as Window).open(url,"_blank")
}

portfolioData: Array<PortfolioData> | undefined;

ngOnInit(): void{
  if(isPlatformBrowser(this.platformId)){
    this.portfolioData  = [
      {
       head: "agt360image-view",
       body: "An Angular component for displaying and interacting with 360-degree images.",
       url: "https://www.npmjs.com/package/agt360image-view",
       backGroundImage: "assets/images/npm.jpg",
      },
      {
       head: "agtcalendar",
       body: "view the calendar view in your Project",
       url: "https://www.npmjs.com/package/agtcalendar",
       backGroundImage: "assets/images/npm.jpg",
      },
      {
       head: "Creating Angular Libraries",
       body: "Creating an Angular library is a valuable skill that allows you to encapsulate and share reusable components, services, and other code across multiple Angular applications. In this article, we'll walk through the steps to create an Angular library from scratch.",
       url: "https://www.c-sharpcorner.com/article/a-comprehensive-guide-to-creating-angular-libraries/",
       backGroundImage: "assets/images/angular.jpg",
      },
      {
       head: "Server-Sent Events",
       body: "Server-Sent Events (SSE) is a powerful technology that enables servers to push real-time updates to web clients over HTTP. When combined with Angular on the client side and Node.js on the server side, SSE offers a seamless and efficient way to build dynamic, data-driven web applications. In this article, we'll explore how to implement SSE in an Angular application with a Node.js backend.",
       url: "https://www.c-sharpcorner.com/article/leveraging-server-sent-events-sse-with-angular-and-node-js/",
       backGroundImage: "assets/images/web.jpg",
      },
     ]
  }
  
}

}
