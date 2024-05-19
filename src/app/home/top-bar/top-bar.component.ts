import { Component, OnInit, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import dayjs from 'dayjs';
import { CommonService } from '../service/commonService/common.service';
import { Navigate, ThemePallete } from '../../models/models';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NgStyle } from '@angular/common';
import { gallery } from '../service/static';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [MatRippleModule, MatIconModule, MatMenuModule, NgStyle],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent implements OnInit {

  commonService = inject(CommonService)
  colorGalaries = gallery
 

  ngOnInit(): void {
    this.changeMode()
  }

  getDate() {
    const date1 = dayjs();
    const date2 = dayjs("2022-10-03");
    const month = date1.diff(date2, 'months')
    return ((month + 1) / 12).toFixed(1)
  }

  scrollTo(menu: keyof Navigate) {
    this.commonService.scrollTo(menu)
  }

  setColorPallete(pallete: ThemePallete){
    this.commonService.currentTheme = pallete
    this.commonService.setTheme();
  }

  changeMode() {
    this.commonService.isDarkMode = !this.commonService.isDarkMode
    this.commonService.setTheme();
  }

}
