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
    getDifferenceInYearsAndMonths(startDate = new Date('2022-10-03'), endDate = new Date()) {
        // Ensure startDate is before endDate
        if (startDate > endDate) {
            [startDate, endDate] = [endDate, startDate];
        }

        // Calculate the differences
        let years = endDate.getFullYear() - startDate.getFullYear();
        let months = endDate.getMonth() - startDate.getMonth();

        // Adjust if the end month is earlier than the start month
        if (months < 0) {
            years--;
            months += 12;
        }
        const month = months ? `.${months}` : ""
        return `${years}${month}`.trim()
    }
}
