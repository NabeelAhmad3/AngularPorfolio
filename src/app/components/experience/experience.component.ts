import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

interface ExperienceItem {
  name: string;
  src: string;
  index?: number;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  imports: [
    NgOptimizedImage
  ],
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  private experienceItems: ExperienceItem[] = [
    {name: "MySQL", src: "./assets/technologies/mysql.png"},
    {name: "PostgreSQL", src: "./assets/technologies/postgresql.png"},
    {name: "Javascript", src: "./assets/technologies/js.png"},
    {name: "Typescript", src: "./assets/technologies/ts.png"},
    {name: "Angular", src: "./assets/technologies/angular.png"},
    {name: "React", src: "./assets/technologies/react.png"},
    {name: "Node.js", src: "./assets/technologies/node.png"},
    {name: "HTML", src: "./assets/technologies/html.png"},
    {name: "CSS", src: "./assets/technologies/css.png"},
    {name: "Bootstrap", src: "./assets/technologies/bootstrap.png"},
    {name: "PrimeNg", src: "./assets/technologies/primeNg.png"},
    {name: "MaterialUI", src: "./assets/technologies/materialUi.png"},
    {name: "TailwindCss", src: "./assets/technologies/TailwindCss.png"},
    {name: "GIT", src: "./assets/technologies/git.png"},
  ];

  get getExperience(): ExperienceItem[] {
    return Array.from({ length: 10 }, (_, i: number) =>
      this.experienceItems.map((item: ExperienceItem, index: number) => ({
        ...item, index: i * this.experienceItems.length + index
      }))
    ).flat();
  }

}
