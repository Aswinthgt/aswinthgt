import { isPlatformBrowser } from '@angular/common';
import { Directive, inject, Inject, PLATFORM_ID, signal, WritableSignal, OnInit, OnDestroy } from '@angular/core';
import { CommonService } from '../../shared/commonService/common.service';

@Directive({
  selector: '[appProfileHelper]'
})
export class ProfileHelperDirective implements OnInit, OnDestroy {

  commonService = inject(CommonService);

  words: string[] = ['AI & Machine Learning', 'MEAN Stack Developer', 'PYTHON Developer', 'Web Technologies', 'Full Stack Developer', 'MERN Stack Developer'];
  currentText: WritableSignal<string> = signal('');
  private currentWordIndex = 0;
  private charIndex = 0;
  private typingSpeed = 150; // in ms
  private pauseBetweenWords = 1000; // in ms
  
  private intervalId: any;
  private timeoutId: any;
  
  private plateformid = inject(PLATFORM_ID);

  ngOnInit() {
    if (isPlatformBrowser(this.plateformid))
      this.startTypingAnimation();
  }

  startTypingAnimation() {
    const wordLength = this.words[this.currentWordIndex].length;

    this.intervalId = setInterval(() => {
      if (this.charIndex < wordLength) {
        this.currentText.update((pre: string)=> pre + this.words[this.currentWordIndex][this.charIndex])
        this.charIndex++;
      } else {
        clearInterval(this.intervalId);
        this.timeoutId = setTimeout(() => this.deleteWord(), this.pauseBetweenWords);
      }
    }, this.typingSpeed);
  }

  deleteWord() {
    this.intervalId = setInterval(() => {
      if (this.charIndex > 0) {
        this.currentText.update((pre: string)=> pre.slice(0, -1))
        this.charIndex--;
      } else {
        clearInterval(this.intervalId);
        this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
        this.startTypingAnimation();
      }
    }, this.typingSpeed / 2);
  }

  goTo(menu: "contact") {
    this.commonService.scrollTo(menu)
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
    if (this.timeoutId) clearTimeout(this.timeoutId);
  }
}
