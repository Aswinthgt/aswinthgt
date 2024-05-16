import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectorRef, Component, afterRender, inject } from '@angular/core';

@Component({
  selector: 'app-user-data',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.scss'
})
export class UserDataComponent {



}
