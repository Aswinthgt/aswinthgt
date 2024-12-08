import { Component, inject } from '@angular/core';
import { UserDataComponent } from './user-data/user-data.component';
import { NgClass } from '@angular/common';
import {MatRippleModule} from '@angular/material/core';

import { CommonService } from '@shared/commonService/common.service';
import { ProfileImageComponent } from "./profile-image/profile-image.component";


@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [UserDataComponent, MatRippleModule, NgClass, ProfileImageComponent],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss'
})
export class ProfileComponent{

  commonService = inject(CommonService)
  audio: any

  goTo(menu:"contact"){
    this.commonService.scrollTo(menu)
  }

  getProfile(){
    if(this.commonService.isDarkMode && this.commonService.currentTheme.value == 'Primary'){
      return 'images/profile-dark.png';
    }else {
      return 'images/profile-light.png'
    } 
  }

}
