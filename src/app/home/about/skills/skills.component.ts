import { AfterViewInit, Component, ElementRef, OnInit, inject, signal, viewChild, viewChildren } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';

import { CommonService } from '../../shared/commonService/common.service';
import { IconsCardComponent } from './icons-card/icons-card.component';
import { IconCard } from '../../../models/models';
export interface SkillCategory {
  title: string;
  icons: Array<IconCard>;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [IconsCardComponent, MatRippleModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillCategories: Array<SkillCategory> = [
    {
      title: 'AI & Machine Learning',
      icons: [
        { iconUrl: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg', iconName: 'Hugging Face', percentage: 85 },
        { iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg', iconName: 'PyTorch / Transformers', percentage: 80 }
      ]
    },
    {
      title: 'AI Agents & Frameworks',
      icons: [
        { iconUrl: 'https://avatars.githubusercontent.com/u/126733545?s=200&v=4', iconName: 'LangChain', percentage: 85 },
        { iconUrl: 'https://github.com/genkit-ai/genkit/raw/main/docs/resources/genkit-logo-dark.png', iconName: 'Firebase Genkit', percentage: 80 },
        { iconUrl: 'https://opencode.ai/_build/assets/preview-opencode-wordmark-simple-light-JrIbT-1j.png', iconName: 'OpenCode', percentage: 90 },
        { iconUrl: 'https://github.com/github/copilot-sdk/raw/main/assets/RepoHeader_01.png', iconName: 'GitHub Copilot', percentage: 95 }
      ]
    },
    {
      title: 'Frontend Mastery',
      icons: [
        { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg', iconName: 'Angular', percentage: 100 },
        { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', iconName: 'React', percentage: 90 },
        { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', iconName: 'TypeScript', percentage: 100 },
        { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', iconName: 'Javascript', percentage: 100 },
        { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', iconName: 'HTML 5', percentage: 100 },
        { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', iconName: 'CSS 3', percentage: 90 },
        { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularmaterial/angularmaterial-original.svg', iconName: 'Material', percentage: 90 },
        { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg', iconName: 'BootStrap', percentage: 98 }
      ]
    },
    {
      title: 'Backend & APIs',
      icons: [
        { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', iconName: 'Node.js', percentage: 98 },
        { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', iconName: 'Express.js', percentage: 95 },
        { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', iconName: 'Python', percentage: 80 },
        { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg', iconName: 'FastAPI', percentage: 80 },
        { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/djangorest/djangorest-line.svg', iconName: 'Django REST', percentage: 50 }
      ]
    },
    {
      title: 'Database & Cloud',
      icons: [
        { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', iconName: 'Mongo DB', percentage: 90 },
        { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', iconName: 'Docker', percentage: 90 },
        { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg', iconName: 'Kubernetes', percentage: 90 },
        { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg', iconName: 'Azure DevOps', percentage: 80 }
      ]
    },
    {
      title: 'Tools & Ecosystem',
      icons: [
        { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', iconName: 'Git', percentage: 90 },
        { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', iconName: 'GitHub', percentage: 90 },
        { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg', iconName: 'Npm', percentage: 95 }
      ]
    }
  ];
}
