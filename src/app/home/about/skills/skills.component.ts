import { Component, OnInit, inject } from '@angular/core';
import { IconsCardComponent } from './icons-card/icons-card.component';
import { IconCard } from '../../../models/models';
import { MatRippleModule } from '@angular/material/core';
import { CommonService } from '../../service/commonService/common.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [IconsCardComponent, MatRippleModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {

  isMobile = inject(CommonService).isMobile();

  showData: Array<IconCard> = []
  iconData: Array<IconCard> = [
    {
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
      iconName: 'Python',
      percentage: 80
    },
    {
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
      iconName: 'Angular',
      percentage: 100
    },
    {
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
      iconName: 'Node.js',
      percentage: 98
    },
    {
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
      iconName: 'Mongo DB',
      percentage: 90
    },
    {
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
      iconName: 'Javascript',
      percentage: 100
    },
    {
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
      iconName: 'Git',
      percentage: 90
    },
    {
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      iconName: "React",
      percentage: 90
    },
    {
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      iconName: "TypeScript",
      percentage: 100
    },
    {
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
      iconName: "BootStrap",
      percentage: 98
    },
    {
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
      iconName: "Express.js",
      percentage: 95
    },
    {
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
      iconName: "GitHub",
      percentage: 90
    },
    {
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg',
      iconName: "Npm",
      percentage: 95
    },
    {
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
      iconName: "Docker",
      percentage: 80
    },
    {
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
      iconName: "HTML 5",
      percentage: 100
    },
    {
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
      iconName: "CSS 3",
      percentage: 90
    }

  ]


  ngOnInit(): void {
    this.showMore()
  }

  showMore() {
    if (!this.isMobile) {
      this.showData = this.iconData
    } else {
      this.showData.push(...this.iconData.splice(0, 4))
    }

  }

}
