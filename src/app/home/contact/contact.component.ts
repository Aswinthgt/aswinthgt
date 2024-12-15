import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatIconModule, MatRippleModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  goTo(url: string) {
    window.open(url);
  }

  waEncodecd = encodeURI('Hi, Aswinth G T');

  subject = encodeURIComponent('Interested in Discussing Your Profile');
  body = encodeURIComponent(
    `Hi Aswinth,\n\n` +
      `I came across your profile and would like to discuss an opportunity with you. Here are the details:\n\n` +
      `- Job Role:\n` +
      `- Location:\n` +
      `- Company Name:\n` +
      `- Job Description:\n\n` +
      `Please let me know if you're interested, and we can schedule a call to discuss further.\n\n` +
      `Looking forward to your response.\n\n` +
      `Best regards,\n` +
      `Your Name`
  );

  links = {
    mail: `mailto:aswinthgt@gmail.com?subject=${this.subject}&body=${this.body}`,
    wa: `https://wa.me/919025294492?text=${this.waEncodecd}`,
    tel: 'tel:+919025294492',
    linkedIn: 'https://www.linkedin.com/in/aswinth37',
    location: 'https://maps.app.goo.gl/EDSheYqdGMNeRhRJ8',
    fb: 'https://www.facebook.com/aswinth.aswinth.7399',
    gitHub: 'https://github.com/Aswinthgt?tab=repositories',
  };
}
