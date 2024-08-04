import { Component, OnInit, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NgStyle } from '@angular/common';

import { CommonService } from '@shared/commonService/common.service';
import { Navigate, ThemePallete } from '../../models/models';
import { gallery } from '@shared/static';

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

  getDifferenceInYearsAndMonths(startDate = new Date('2022-10-03'), endDate = new Date()) {
    // Ensure startDate is before endDate
    if (startDate > endDate) {
      [startDate, endDate] = [endDate, startDate];
    }

    // Calculate the differences
    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();

    // Adjust if the end month is earlier than the start month
    if (months < 0) {
      years--;
      months += 12;
    }

    return `${years}.${months}`
  }

  scrollTo(menu: keyof Navigate) {
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
