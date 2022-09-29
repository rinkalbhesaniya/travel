import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  onHomeClick() {
    this.router.navigateByUrl('home');
  }
  onStaysClick() {
    this.router.navigateByUrl('stays');
  }
  onFlightsClick() {
    this.router.navigateByUrl('flights');
  }
  onPackagesClick() {
    this.router.navigateByUrl('packages');
  }
  onSignUpClick() {
    this.router.navigateByUrl('Sign Up');
  }
}
