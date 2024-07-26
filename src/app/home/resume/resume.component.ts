import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { NgClass } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { CommonService } from '@shared/commonService/common.service';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [MatIconModule, MatRippleModule, NgClass, MatProgressSpinnerModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {

  http = inject(HttpClient);
  commonService = inject(CommonService);

  isLoading = false

  goTo() {
    (window as Window).open("https://portfolio-aswinthgts-projects.vercel.app", "_blank")
  }

  download() {
    if (this.isLoading) return;
    this.isLoading = true;
    this.http.get("aswinth.pdf", { responseType: "blob" }).subscribe({
      next: (data) => {
        const blob = new Blob([data], { type: "application/pdf" })
        const uri = window.URL.createObjectURL(blob)
        this.commonService.download(uri, "aswinth.pdf");
        this.isLoading = false
      },
      error: () => {
        this.isLoading = false
      }
    })
  }
}
