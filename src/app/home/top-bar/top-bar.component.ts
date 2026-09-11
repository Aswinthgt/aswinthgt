import { Component, OnInit, inject, HostListener, HostBinding, ElementRef } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

import { CommonService } from '../shared/commonService/common.service';
import { Navigate, ThemePallete } from '../../models/models';
import { gallery } from '../shared/static';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [MatRippleModule, MatIconModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent implements OnInit {

  commonService = inject(CommonService);
  elementRef = inject(ElementRef);
  colorGalaries = gallery;

  isPaletteOpen = false;
  
  @HostBinding('class.navbar-hidden') isHidden = false;
  lastScrollTop = 0;

  togglePaletteDrawer(event: MouseEvent) {
    event.stopPropagation();
    this.isPaletteOpen = !this.isPaletteOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (this.isPaletteOpen && !this.elementRef.nativeElement.contains(target)) {
      this.isPaletteOpen = false;
    }
  }

  @HostListener('window:keydown.escape')
  onEscape() {
    this.isPaletteOpen = false;
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    // Close palette drawer on any scroll
    if (this.isPaletteOpen) {
      this.isPaletteOpen = false;
    }

    // Hide/show navbar based on scroll direction
    if (currentScroll > this.lastScrollTop && currentScroll > 50) {
      this.isHidden = true;
    } else {
      this.isHidden = false;
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  ngOnInit(): void {
    // Theme is handled by CommonService default and AppComponent init
  }

  scrollTo(menu: keyof Navigate | null) {
    this.commonService.scrollTo(menu)
  }

  setColorPallete(pallete: ThemePallete, event?: MouseEvent) {
    this.commonService.setThemeWithTransition(() => {
      this.commonService.currentTheme = pallete;
    }, event);
    this.isPaletteOpen = false;
  }

  changeMode(event?: MouseEvent) {
    this.commonService.setThemeWithTransition(() => {
      this.commonService.isDarkMode = !this.commonService.isDarkMode;
    }, event);
  }

}
