import { Component, Inject, inject, PLATFORM_ID } from '@angular/core';
import {MatRippleModule} from '@angular/material/core';

import { CommonService } from '@shared/commonService/common.service';
import { ProfileImageComponent } from "./profile-image/profile-image.component";
import { interval, Subscription } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { ProfileHelperDirective } from './profile_helper/profile-helper.directive';


@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [MatRippleModule, ProfileImageComponent],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss'
})
export class ProfileComponent extends ProfileHelperDirective {}
