import { ElementRef } from "@angular/core"

export interface IconCard{
    iconUrl:string,
    iconName: string
  }

export interface PortfolioData{
  head: string,
  body: string,
  url: string,
  backGroundImage: string
}

export interface Experience{
  year:string,
  position: String,
  place:string,
  about:string
}

export interface Navigate{
  about: ElementRef;
  portfolio: ElementRef,
  contact: ElementRef
}