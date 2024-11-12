import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  getExperience() {
    const startDate = new Date(2024, 6); 
    const currentDate = new Date();
    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();

    if (months < 0 || (months === 0 && currentDate.getDate() < startDate.getDate())) {
      years--;
      months = 12 + months;
    }

    const totalMonths = years * 12 + months;

    return { years, months, totalMonths };
  }
}
