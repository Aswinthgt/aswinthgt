import { Component, InputSignal, input } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { IconCard } from "../../../../models/models"
import { MatRippleModule } from '@angular/material/core';
import { IconsComponent } from '../../../../icons/icons.component';
import { NgStyle } from '@angular/common';



@Component({
  selector: 'app-icons-card',
  standalone: true,
  imports: [MatRippleModule,IconsComponent, MatProgressBarModule, NgStyle],
  templateUrl: './icons-card.component.html',
  styleUrl: './icons-card.component.scss'
})
export class IconsCardComponent {
  iconDetails:InputSignal<Array<IconCard>> = input.required()
}
