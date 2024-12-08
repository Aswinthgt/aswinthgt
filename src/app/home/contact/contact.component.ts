import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [MatIconModule, MatRippleModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent {

goTo(url:string){
  window.open(url)
}

links = {
  mail:"mailto:aswinthgt@gmail.com",
  wa: "https://wa.me/+919025294492",
  tel: "tel:+919025294492",
  linkedIn: "https://www.linkedin.com/in/aswinth37",
  location: "https://maps.app.goo.gl/EDSheYqdGMNeRhRJ8",
  fb: "https://www.facebook.com/aswinth.aswinth.7399",
  gitHub: 'https://github.com/Aswinthgt?tab=repositories'
}

}
