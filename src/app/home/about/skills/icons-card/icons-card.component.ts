import { Component, ElementRef, InputSignal, input, viewChild, viewChildren } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';

import { IconsComponent } from '../../../../icons/icons.component';
import { IconCard } from "../../../../models/models"





import { ScrollRevealDirective } from '../../../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-icons-card',
  imports: [MatRippleModule, IconsComponent, MatProgressBarModule],
  standalone: true,
  templateUrl: './icons-card.component.html',
  styleUrls: ['./icons-card.component.scss']
})
export class IconsCardComponent {
  iconDetails: InputSignal<Array<IconCard>> = input.required()


  ngAfterViewInit() {

  }
}