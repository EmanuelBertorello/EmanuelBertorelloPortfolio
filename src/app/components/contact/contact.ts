import { Component } from '@angular/core';
import { FadeInDirective } from '../../directives/fade-in.directive';

@Component({
  selector: 'app-contact',
  imports: [FadeInDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {}
