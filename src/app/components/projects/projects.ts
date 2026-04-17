import { Component } from '@angular/core';
import { FadeInDirective } from '../../directives/fade-in.directive';

@Component({
  selector: 'app-projects',
  imports: [FadeInDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {}
