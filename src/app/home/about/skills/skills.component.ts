import { AfterViewInit, Component, ElementRef, OnInit, inject, signal, viewChild, viewChildren } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';

import { CommonService } from '@shared/commonService/common.service';
import { IconsCardComponent } from './icons-card/icons-card.component';
import { IconCard } from '../../../models/models';
import { NgStyle } from '@angular/common';
import { SKILLS_CATEGOTIES } from '@app/home/shared/static';

@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [IconsCardComponent, MatRippleModule, NgStyle],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit, AfterViewInit {

   
  wrapperSection = viewChildren("wrapperSection", {read: ElementRef})
  isMobile = inject(CommonService).isMobile();
  activeBar = signal({
    transform: `translateX(5px)`,
    width: "47px"
  })
  wrapper = signal<Partial<{height: string}>>({})
  wrapperSkills = signal({
    transform: `translateX(0)`,
  })

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
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
      iconName: "Express.js",
      percentage: 95
    },
    {
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularmaterial/angularmaterial-original.svg',
      iconName: "Material",
      percentage: 90
    },
    {
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
      iconName: 'FastAPI',
      percentage: 80
    },
    {
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/djangorest/djangorest-line.svg',
      iconName: 'Django REST',
      percentage: 50
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
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg',
      iconName: "Kubernetes",
      percentage: 55
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

  ngAfterViewInit(): void {
      this.wrapper.set({
        height: this.wrapperSection()[0].nativeElement.offsetHeight + "px"
      })
  }

  showMore() {
      this.showData = this.iconData
  }

  menuChange(event: Event, index: number){
      this.activeBar.set({
        transform: `translateX(${(event.target as HTMLElement).offsetLeft}px)`,
        width: `${(event.target as HTMLElement).offsetWidth}px`
      })

      const totalSections = 4; // Number of sections
      const moveValue = -(index * (100 / totalSections)) + "%";

      this.wrapperSkills.set({
        transform: `translateX(${moveValue})`
      })
      this.wrapper.set({
        height: this.wrapperSection()[index].nativeElement.offsetHeight + "px"
      })
  }
  getSkills(categories: "mean" | "mern" | "node.js"){
    const catSkill = SKILLS_CATEGOTIES[categories]
    return this.iconData.filter((item: IconCard) => catSkill.find(s=> s == item.iconName))
  }

}
