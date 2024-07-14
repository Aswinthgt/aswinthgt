import { ElementRef, Injectable } from '@angular/core';
import { Navigate, ThemePallete } from '../../../models/models';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  events: Partial<Navigate> = {}

  private _darkMode = false;

  currentTheme: ThemePallete = {
    value: "Primary",
    dark: "dark",
    light: "light"
  }

  set isDarkMode(value: boolean) {
    this._darkMode = value
  }

  get isDarkMode() {
    return this._darkMode;
  }


  rootElement: ElementRef<HTMLDivElement> | undefined
  setTheme() {
    this.rootElement?.nativeElement.setAttribute("data-theme",
      this.isDarkMode ? this.currentTheme.dark : this.currentTheme.light)
  }


  scrollTo(menu: keyof Navigate) {
    const nativeElement = this.events[menu]?.nativeElement;
    nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }

  download(uri: string, fileName: string) {

    const link = document.createElement('a');
    link.href = uri;
    link.download = fileName;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  }


  isMobile() {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

    // Check if the user agent string indicates a mobile device
    return /android|iphone|ipad|iPod|opera mini|iemobile|wpdesktop|windows phone|blackberry/i.test(userAgent.toLowerCase());
  }



}
