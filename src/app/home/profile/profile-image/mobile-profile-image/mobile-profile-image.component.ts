import { Component } from '@angular/core';
import { ProfileImageHelperDirective } from '../profile-image-helper/profile-image-helper.directive';
import { NgClass, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-mobile-profile-image',
  imports: [NgClass, NgOptimizedImage],
  templateUrl: './mobile-profile-image.component.html',
  styleUrl: './mobile-profile-image.component.scss'
})
export class MobileProfileImageComponent extends ProfileImageHelperDirective {

}
