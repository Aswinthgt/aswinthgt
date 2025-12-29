import { ElementRef, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Navigate, ThemePallete } from '../../../models/models';
import { gallery } from '../static';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(@Inject(PLATFORM_ID) private plateformid: Object) { }

  events: Partial<Navigate> = {};

  private _darkMode = true;

  private _getRotationalIndex = () => {
    const day = new Date().getDay();
    if (day < 6) return day;
    return 0;
  };

  currentTheme: ThemePallete = gallery[this._getRotationalIndex()];

  set isDarkMode(value: boolean) {
    this._darkMode = value;
  }

  get isDarkMode() {
    return this._darkMode;
  }

  rootElement: ElementRef<HTMLDivElement> | undefined;
  setTheme() {
    if (isPlatformBrowser(this.plateformid)) {
      document.body.setAttribute(
        'data-theme',
        this.isDarkMode ? this.currentTheme.dark : this.currentTheme.light
      );
    }
  }

  scrollTo(menu: keyof Navigate | null) {
    if (!menu) {
      window.scrollTo({top:0, behavior: 'smooth'});
      return;
    }
    const nativeElement = this.events[menu as keyof Navigate]?.nativeElement;
    nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  download(uri: string, fileName: string) {
    const link = document.createElement('a');
    link.href = uri;
    link.download = fileName;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  isMobile() {
    if (typeof navigator !== undefined) {
      const userAgent =
        navigator?.userAgent ?? navigator?.vendor ?? (window as any)?.opera;

      // Check if the user agent string indicates a mobile device
      return /android|iphone|ipad|iPod|opera mini|iemobile|wpdesktop|windows phone|blackberry/i.test(
        userAgent.toLowerCase()
      );
    }

    return true;
  }

  isMobileUsingResolution() {
    if (isPlatformBrowser(this.plateformid)) {
      return window.innerWidth <= 768;
    }
    return false;
  }
}
