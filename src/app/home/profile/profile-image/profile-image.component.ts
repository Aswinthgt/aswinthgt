import { NgClass, NgOptimizedImage } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { CommonService } from '@app/home/shared/commonService/common.service';
import { ProfileImageHelperDirective } from './profile-image-helper/profile-image-helper.directive';

@Component({
    selector: 'app-profile-image',
    standalone: true,
    imports: [NgClass, NgOptimizedImage],
    templateUrl: './profile-image.component.html',
    styleUrl: './profile-image.component.scss'
})
export class ProfileImageComponent extends ProfileImageHelperDirective {}
