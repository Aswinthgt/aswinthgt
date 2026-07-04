import { Component, OnInit, inject, HostListener, HostBinding } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { CommonService } from '../shared/commonService/common.service';
import { Navigate, ThemePallete } from '../../models/models';
import { gallery } from '../shared/static';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [MatRippleModule, MatIconModule, MatMenuModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent implements OnInit {

  commonService = inject(CommonService)
  colorGalaries = gallery
  
  @HostBinding('class.navbar-hidden') isHidden = false;
  lastScrollTop = 0;


  @HostListener('window:scroll')
  onWindowScroll() {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;
    
    if (currentScroll > this.lastScrollTop && currentScroll > 50) {
      // Scrolling down
      this.isHidden = true;
    } else {
      // Scrolling up
      this.isHidden = false;
    }
    
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
  }

  ngOnInit(): void {
    // Theme is handled by CommonService default and AppComponent init
  }

  scrollTo(menu: keyof Navigate | null) {
    this.commonService.scrollTo(menu)
  }

  setColorPallete(pallete: ThemePallete) {
    this.commonService.currentTheme = pallete
    this.commonService.setTheme();
  }

  changeMode() {
    this.commonService.isDarkMode = !this.commonService.isDarkMode
    this.commonService.setTheme();
  }

}
