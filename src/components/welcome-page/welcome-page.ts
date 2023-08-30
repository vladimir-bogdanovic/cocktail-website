import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'welcome-page',
  templateUrl: './welcome-page.html',
  styleUrls: ['./welcome-page.scss'],
})
export class WelcomePage {
  constructor(private route: Router) {}

  goToCategories(): void {
    this.route.navigate(['categories']);
  }
}
