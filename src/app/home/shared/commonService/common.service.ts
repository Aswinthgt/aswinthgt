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

  // Daily 7-day theme rotation function (Commented out as requested)
  // private _getRotationalIndex = () => {
  //   const day = new Date().getDay();
  //   if (day < 6) return day;
  //   return 0;
  // };

  // Default theme set to Catppuccin Mocha
  currentTheme: ThemePallete = gallery[0];

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

  setThemeWithTransition(updateFn?: () => void, event?: MouseEvent) {
    if (!isPlatformBrowser(this.plateformid)) {
      if (updateFn) updateFn();
      this.setTheme();
      return;
    }

    const doc = document as any;
    if (!doc.startViewTransition) {
      if (updateFn) updateFn();
      this.setTheme();
      return;
    }

    // Determine the origin point (x, y) from the clicked daylight/theme button
    let x: number = event?.clientX ?? 0;
    let y: number = event?.clientY ?? 0;

    if ((!x && !y) && event?.currentTarget) {
      const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
      x = rect.left + rect.width / 2;
      y = rect.top + rect.height / 2;
    }

    if (!x && !y) {
      const btn = document.querySelector('.controls .icon-btn');
      if (btn) {
        const rect = btn.getBoundingClientRect();
        x = rect.left + rect.width / 2;
        y = rect.top + rect.height / 2;
      } else {
        x = window.innerWidth / 2;
        y = 50;
      }
    }

    // Maximum distance from (x, y) to any screen corner for full circle coverage
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    document.documentElement.classList.add('theme-transitioning');
    const transition = doc.startViewTransition(() => {
      if (updateFn) updateFn();
      this.setTheme();
    });

    transition.ready.then(() => {
      try {
        // Smooth circle ripple expanding outward from the clicked button point
        const clipPath = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`
        ];
        document.documentElement.animate(
          { clipPath },
          {
            duration: 650,
            easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
            pseudoElement: '::view-transition-new(root)'
          }
        );
      } catch (e) {
        // Fallback for environments where Web Animations on pseudo-elements is not supported
      }
    });

    transition.finished.finally(() => {
      document.documentElement.classList.remove('theme-transitioning');
    });
  }

  scrollTo(menu: keyof Navigate | null) {
    if (!menu) {
      window.scrollTo({top:0, behavior: 'smooth'});
      return;
    }
    
    // Always query the live DOM to prevent issues with detached elements after Angular hydration
    const nativeElement = document.querySelector(`app-${menu}`);
    
    if (nativeElement) {
      const top = nativeElement.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: top,
        behavior: 'smooth'
      });
    }
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
