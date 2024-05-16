import { Component, InputSignal, input } from '@angular/core';
import { IconCard } from "../../../../models/models"
import { MatRippleModule } from '@angular/material/core';



@Component({
  selector: 'app-icons-card',
  standalone: true,
  imports: [MatRippleModule],
  templateUrl: './icons-card.component.html',
  styleUrl: './icons-card.component.scss'
})
export class IconsCardComponent {
  iconDetails:InputSignal<Array<IconCard>> = input.required()
}
