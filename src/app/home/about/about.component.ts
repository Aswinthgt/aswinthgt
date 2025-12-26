import { Component } from '@angular/core';

import { SkillsComponent } from '@about/skills/skills.component';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';


@Component({
    selector: 'app-about',
    standalone: true,
    imports: [SkillsComponent],
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent {

}
