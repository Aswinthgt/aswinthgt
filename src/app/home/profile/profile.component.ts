import { Component, Inject, inject, PLATFORM_ID, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';

import { MatIconModule } from '@angular/material/icon';

import { CommonService } from '../shared/commonService/common.service';
import { isPlatformBrowser } from '@angular/common';
import { ProfileHelperDirective } from './profile_helper/profile-helper.directive';


@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [MatRippleModule, MatIconModule],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss'
})
export class ProfileComponent extends ProfileHelperDirective implements AfterViewInit {
    @ViewChild('introVideo') introVideo!: ElementRef<HTMLVideoElement>;
    isPlaying = false;

    ngAfterViewInit() {
        // We now wait for the user to click "Play Intro" before playing
    }

    startExperience() {
        if (this.isPlaying) return;
        this.isPlaying = true;
        
        if (this.introVideo && this.introVideo.nativeElement) {
            const video = this.introVideo.nativeElement;
            video.muted = false; // Play with audio
            video.play().catch(e => {
                console.warn('Video play failed:', e);
                this.isPlaying = false;
            });
        }
    }

    onVideoEnd() {
        this.isPlaying = false;
        if (this.introVideo && this.introVideo.nativeElement) {
            this.introVideo.nativeElement.currentTime = 0;
        }
    }
}
