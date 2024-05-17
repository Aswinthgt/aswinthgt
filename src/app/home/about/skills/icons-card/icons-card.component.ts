import { Component, InputSignal, input } from '@angular/core';
import { IconCard } from "../../../../models/models"
import { MatRippleModule } from '@angular/material/core';
import { IconsComponent } from '../../../../icons/icons.component';



@Component({
  selector: 'app-icons-card',
  standalone: true,
  imports: [MatRippleModule,IconsComponent],
  templateUrl: './icons-card.component.html',
  styleUrl: './icons-card.component.scss'
})
export class IconsCardComponent {
  iconDetails:InputSignal<Array<IconCard>> = input.required()
}
