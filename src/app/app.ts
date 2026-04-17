import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Stack } from './components/stack/stack';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Stack, Projects, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
