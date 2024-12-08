import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import { SkillsComponent } from '@about/skills/skills.component';


@Component({
    selector: 'app-about',
    standalone: true,
    imports: [SkillsComponent, NgOptimizedImage],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})
export class AboutComponent {

}
