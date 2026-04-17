import { Component } from '@angular/core';
import { FadeInDirective } from '../../directives/fade-in.directive';

@Component({
  selector: 'app-about',
  imports: [FadeInDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
