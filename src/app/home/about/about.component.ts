import { Component } from '@angular/core';
import { SkillsComponent } from './skills/skills.component';
import { NgOptimizedImage } from '@angular/common';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SkillsComponent, NgOptimizedImage],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
