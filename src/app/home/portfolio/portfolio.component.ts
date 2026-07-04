import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { isPlatformBrowser } from '@angular/common';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';
import { PortfolioData } from '../../models/models';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [MatRippleModule, MatIconModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  platformId = inject(PLATFORM_ID)

  textShort(text: string) {
    if (text.length > 75) {
      text = text.slice(0, 75)
      text += "..."
      return text;
    } else {
      return text
    }
  }

  goTo(url: string) {
    (window as Window).open(url, "_blank")
  }

  portfolioData: Array<PortfolioData> | undefined;
  aiModelsData: Array<PortfolioData> | undefined;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.aiModelsData = [
        {
          head: "Phi-3.5 Mini Personal Assistant",
          body: "Fine-tuned model based on 'aswinth37/aswinth-phi3.5-mini-personal-assistant-v1'. Trained specifically using my personal resume data to act as a personalized AI assistant.",
          url: "https://huggingface.co/aswinth37/aswinth-phi3.5-mini-personal-assistant-v1",
          backGroundImage: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg"
        },
        {
          head: "Fintech AI Model",
          body: "A private fine-tuned model ('aswinth37/fintech-ai-model'). Created by crawling all pages of fintech.com to build a 98K dataset, ensuring the model possesses deep domain knowledge about the website.",
          url: "https://huggingface.co/aswinth37/fintech-ai-model",
          backGroundImage: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg"
        }
      ];

      this.portfolioData = [
        {
          head: "Smoky AI Agent",
          body: "AI-powered coding assistant for VS Code with Copilot SDK, local LLM, and MCP tool support.",
          url: "https://marketplace.visualstudio.com/items?itemName=aswinth.smoky",
          backGroundImage: "https://aswinth.gallerycdn.vsassets.io/extensions/aswinth/smoky/0.0.16/1781892668437/Microsoft.VisualStudio.Services.Icons.Default"
        },
        {
          head: "Replace Env Variables Task",
          body: "Replace Env in File is an Azure DevOps custom task that replaces placeholders in a file with values from pipeline variables or environment variables.",
          url: "https://marketplace.visualstudio.com/items?itemName=aswinth.replace-env-extension",
          backGroundImage: "images/replace_env.png",
        },
        {
          head: "agt360image-view",
          body: "An Angular component for displaying and interacting with 360-degree images.",
          url: "https://www.npmjs.com/package/agt360image-view",
          backGroundImage: "images/npm.jpg",
        },
        {
          head: "agtcalendar",
          body: "view the calendar view in your Project",
          url: "https://www.npmjs.com/package/agtcalendar",
          backGroundImage: "images/npm.jpg",
        },
        {
          head: "Creating Angular Libraries",
          body: "Creating an Angular library is a valuable skill that allows you to encapsulate and share reusable components, services, and other code across multiple Angular applications. In this article, we'll walk through the steps to create an Angular library from scratch.",
          url: "https://www.c-sharpcorner.com/article/a-comprehensive-guide-to-creating-angular-libraries",
          backGroundImage: "images/angular.jpg",
        },
        {
          head: "Server-Sent Events",
          body: "Server-Sent Events (SSE) is a powerful technology that enables servers to push real-time updates to web clients over HTTP. When combined with Angular on the client side and Node.js on the server side, SSE offers a seamless and efficient way to build dynamic, data-driven web applications. In this article, we'll explore how to implement SSE in an Angular application with a Node.js backend.",
          url: "https://www.c-sharpcorner.com/article/leveraging-server-sent-events-sse-with-angular-and-node-js",
          backGroundImage: "images/web.jpg",
        },
        {
          head: "Angular SEO",
          body: "Search Engine Optimization (SEO) is crucial for the success of any website. While Angular is a powerful framework for building dynamic single-page applications, it presents unique challenges for SEO due to its reliance on JavaScript for rendering content. In this guide, we’ll explore best practices for optimizing an Angular application for search engines, including how to implement meta tags for different pages dynamically.",
          url: "https://dev.to/aswinthgt/mastering-seo-with-angular-v18-5166",
          backGroundImage: "images/seo.png"
        }
      ]
    }

  }

}
