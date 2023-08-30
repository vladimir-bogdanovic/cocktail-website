import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header {
  isNavbarActive = false;
  constructor(private router: Router) {}
  openMenu(): void {
    this.isNavbarActive = !this.isNavbarActive;
  }
  navigate(route: string): void {
    this.router.navigate([route]);
    this.isNavbarActive = false;
  }
}
