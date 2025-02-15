import { Component } from '@angular/core';
import { ProfileHelperDirective } from '../profile_helper/profile-helper.directive';
import { MatRippleModule } from '@angular/material/core';
import { MobileProfileImageComponent } from '../profile-image/mobile-profile-image/mobile-profile-image.component';

@Component({
  selector: 'app-mobile-profile',
  imports: [MatRippleModule, MobileProfileImageComponent],
  templateUrl: './mobile-profile.component.html',
  styleUrl: './mobile-profile.component.scss'
})
export class MobileProfileComponent extends ProfileHelperDirective {

}
