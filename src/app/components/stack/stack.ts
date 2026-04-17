import { Component } from '@angular/core';
import { FadeInDirective } from '../../directives/fade-in.directive';

@Component({
  selector: 'app-stack',
  imports: [FadeInDirective],
  templateUrl: './stack.html',
  styleUrl: './stack.scss',
})
export class Stack {}
