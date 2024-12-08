import { NgClass, NgOptimizedImage } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { CommonService } from '@app/home/shared/commonService/common.service';

@Component({
    selector: 'app-profile-image',
    standalone: true,
    imports: [NgClass, NgOptimizedImage],
    templateUrl: './profile-image.component.html',
    styleUrl: './profile-image.component.scss'
})
export class ProfileImageComponent {
  commonService = inject(CommonService);
  isImageLoaded = signal(false);

  isImageLoading() {
    this.isImageLoaded.set(true);
  }
}
