import { Component, InputSignal, input } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NgStyle } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';

import { IconsComponent } from '@app/icons/icons.component';
import { IconCard } from "../../../../models/models"




@Component({
    selector: 'app-icons-card',
    imports: [MatRippleModule, IconsComponent, MatProgressBarModule, NgStyle],
    standalone: true,
    templateUrl: './icons-card.component.html',
    styleUrl: './icons-card.component.scss'
})
export class IconsCardComponent {
  iconDetails:InputSignal<Array<IconCard>> = input.required()
}
