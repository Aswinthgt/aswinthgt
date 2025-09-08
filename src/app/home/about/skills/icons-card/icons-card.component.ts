import { Component, ElementRef, InputSignal, input, viewChild, viewChildren } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgStyle } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';

import { IconsComponent } from '@app/icons/icons.component';
import { IconCard } from "../../../../models/models"
import Atropos from 'atropos';




@Component({
  selector: 'app-icons-card',
  imports: [MatRippleModule, IconsComponent, MatProgressBarModule, NgStyle],
  standalone: true,
  templateUrl: './icons-card.component.html',
  styleUrl: './icons-card.component.scss'
})
export class IconsCardComponent {
  iconDetails: InputSignal<Array<IconCard>> = input.required()
  atroposEl = viewChildren("atroposEl", { read: ElementRef })

  ngAfterViewInit() {
    this.atroposEl()?.forEach(el => {
      Atropos({
        el: el?.nativeElement,
        shadow: true,
        highlight: true,
        rotateXMax: 40,
        rotateYMax: 40
      })
    })


  }
}