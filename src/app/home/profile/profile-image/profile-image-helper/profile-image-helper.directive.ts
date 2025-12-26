import { Directive, inject, signal } from '@angular/core';
import { CommonService } from '../../../shared/commonService/common.service';

@Directive({
  selector: '[appProfileImageHelper]'
})
export class ProfileImageHelperDirective {

  commonService = inject(CommonService);
  isImageLoaded = signal(false);

  isImageLoading() {
    this.isImageLoaded.set(true);
  }

}
