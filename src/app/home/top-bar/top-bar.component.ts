import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import dayjs from 'dayjs';
import { CommonService } from '../service/commonService/common.service';
import { Navigate } from '../../models/models';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [MatRippleModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {

  commonService = inject(CommonService)

  getDate() {
    const date1 = dayjs();
    const date2 = dayjs("2022-10-03");
    const month = date1.diff(date2, 'months')
    return ((month+1)/12).toFixed(1)
  }

  scrollTo(menu: keyof Navigate ){
    this.commonService.scrollTo(menu) 
  }

}
