import {Component} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {ProjectItemComponent} from "./project-item/project-item.component";

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  src: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ProjectItemComponent,
    NgForOf,
    NgClass
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  protected projects: Project[]  = [
    {
      name: 'My Portfolio',
      description: 'Feel free to check out the code for my portfolio on Github. It\'s open for exploration, and you\'re welcome to fork it and create your own version!',
      technologies: ['HTML', 'SCSS', 'Bootstrap','Angular', 'TypeScript',  'Github Actions'],
      src: './assets/projects/portfolio.png',
      link: 'https://github.com/NabeelAhmad3/AngularPorfolio.git',
    },
       {
      name: 'Car Bidding Website',
      description: 'Built a responsive CAR Bidding platform with Angular 18, Material UI, and Bootstrap for competitive car auctions. Developing a Node.js backend to enable real-time bidding, secure transactions, and user management, creating a seamless experience for buyers and sellers.',
      technologies: ['HTML', 'CSS', 'Bootstrap','Material UI','Angular', 'TypeScript','NodeJs','ExpressJs','MySql',  'Github Actions'],
      src: './assets/projects/car.svg',
      link: 'https://github.com/NabeelAhmad3/FYPBiddingApp.git',
    },
    {
   name: 'FictionFlare',
   description: 'FictionFlare, a blog platform built with Angular 18, MySQL, Node.js, and Express. Features include real-time updates with Socket.IO, JWT-based authentication, an emoji picker, and a rich text editor for enhanced user engagement.',
   technologies: ['HTML', 'CSS', 'Bootstrap','Material UI','Angular', 'TypeScript','NodeJs','ExpressJs','MySql',  'Github Actions'],
   src: './assets/projects/fiction.jpg',
   link: 'https://github.com/NabeelAhmad3/bloggingApp.git',
 }
  ];
}
