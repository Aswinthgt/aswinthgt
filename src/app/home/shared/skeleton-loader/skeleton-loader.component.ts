import { NgClass, NgStyle } from '@angular/common';
import { Component, input, InputSignal } from '@angular/core';

@Component({
    selector: 'app-skeleton-loader',
    standalone: true,
    imports: [NgStyle, NgClass],
    templateUrl: './skeleton-loader.component.html',
    styleUrl: './skeleton-loader.component.scss'
})
export class SkeletonLoaderComponent {
  width: InputSignal<string> = input<string>('100%');
  height: InputSignal<string> = input<string>('20px');
  borderRadius: InputSignal<string> = input<string>('4px');
  shape: InputSignal<'rectangular' | 'circular' | 'text'> = input<
    'rectangular' | 'circular' | 'text'
  >('rectangular');
}
