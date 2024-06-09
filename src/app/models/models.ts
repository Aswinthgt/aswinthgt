import { ElementRef } from "@angular/core"

export interface IconCard {
  iconUrl: string,
  iconName: string
}

export interface PortfolioData {
  head: string,
  body: string,
  url: string,
  backGroundImage: string
}

export interface Experience {
  endYear: string,
  startYear: string,
  position: String,
  place: string,
  about: string
}

export interface Navigate {
  about: ElementRef;
  portfolio: ElementRef,
  contact: ElementRef
}

export interface ThemePallete {
  value: string,
  dark: string,
  light: string
}


export interface MetaContent {
  title: string,
  description: string,
  image: string,
  url: string,
  keyWords: string,
  author: string
}