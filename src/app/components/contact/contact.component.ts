import {Component} from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  goToLinkedin() {
    window.open('https://www.linkedin.com/in/web-developer-nabeel?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', '_blank');
  }

  get email(): string {
    return 'nabeelahmadkhan03@gmail.com';
  }
}
