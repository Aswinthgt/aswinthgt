import { Component, Inject, inject, PLATFORM_ID } from '@angular/core';
import {MatRippleModule} from '@angular/material/core';

import { CommonService } from '@shared/commonService/common.service';
import { ProfileImageComponent } from "./profile-image/profile-image.component";
import { interval, Subscription } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';


@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [MatRippleModule, ProfileImageComponent],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss'
})
export class ProfileComponent{

  commonService = inject(CommonService)

  words: string[] = ['MEAN Stack Developer', 'PYTHON Developer', 'Web Technologies', 'Full Stack Developer', 'MERN Stack Developer'];
  currentText: string = '';
  private currentWordIndex = 0;
  private charIndex = 0;
  private typingSpeed = 150; // in ms
  private pauseBetweenWords = 1000; // in ms
  private subscription: Subscription | null = null;

  constructor(@Inject(PLATFORM_ID) private plateformid: string){}

  ngOnInit() {
    if(isPlatformBrowser(this.plateformid))
    this.startTypingAnimation();
  }

  startTypingAnimation() {
    const typingInterval = interval(this.typingSpeed);
    const wordLength = this.words[this.currentWordIndex].length;

    this.subscription = typingInterval.subscribe(() => {
      if (this.charIndex < wordLength) {
        this.currentText += this.words[this.currentWordIndex][this.charIndex];
        this.charIndex++;
      } else {
        this.subscription?.unsubscribe();
        setTimeout(() => this.deleteWord(), this.pauseBetweenWords);
      }
    });
  }

  deleteWord() {
    const deletingInterval = interval(this.typingSpeed / 2);

    this.subscription = deletingInterval.subscribe(() => {
      if (this.charIndex > 0) {
        this.currentText = this.currentText.slice(0, -1);
        this.charIndex--;
      } else {
        this.subscription?.unsubscribe();
        this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
        this.startTypingAnimation();
      }
    });
  }

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

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
