import { Component } from '@angular/core';
import { Experience } from '../../models/models';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences: Array<Experience> = [
    {
      endYear: "Present",
      startYear: "2023",
      position: "MEAN Stack Developer",
      place: "Zero Pixels, Info Park, India",
      about: "Led the optimization of Auth0 authentication workflows and scalable MongoDB integration within MEAN stack applications, fostering heightened security, reduced login times, and seamless performance for a growing user base, utilizing Angular, React, Node.js, Express.js, MongoDB, Git, and GitHub."
    },
    {
      endYear: "2023",
      startYear: "2022",
      position: "Angular Developer",
      place: "Fakeeh Tech, Techno Park, India",
      about: "Restructured the project in an Angular-compatible format to enhance readability. Optimized the project’s bundle size, resulting in improved performance. Created a separate library module for multiple project development. Ensured scalability and efficiency of the library module. Developed a dynamic form component for use across different forms with varying styles and functionalities. Angular, Angular Material, Bootstrap, CSS3, HTML5, TFS"
    }
  ]
}
