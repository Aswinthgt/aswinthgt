import { Component, inject } from '@angular/core';
import { UserDataComponent } from './user-data/user-data.component';
import { NgOptimizedImage } from '@angular/common';
import {MatRippleModule} from '@angular/material/core';
import { CommonService } from '../service/commonService/common.service';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [UserDataComponent,NgOptimizedImage,MatRippleModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent{

  commonService = inject(CommonService)
  audio: any

  goTo(menu:"contact"){
    this.audio.play()
    this.commonService.scrollTo(menu)
  }

  playAudio() {
    this.audio = document.createElement("audio");
    this.audio.id = "motivation"
    this.audio.src = "assets/audio.mp3"
    document.body.appendChild(this.audio);
  }

}
