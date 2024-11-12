import {Component} from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  constructor(private viewportScroller: ViewportScroller) {}

  scrollTo(section: string) {
    this.viewportScroller.scrollToAnchor(section);
  }

  openResume() {
    window.open("./assets/NabeelAhmad cv.pdf");
  }

  goToLinkedin() {
    window.open('https://www.linkedin.com/in/web-developer-nabeel?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', '_blank');
  }

  goToGithub() {
    window.open('https://github.com/NabeelAhmad3', '_blank');
  }
}
