import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.css',
})
export class AlertsComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('loginUser') == null) {
      this.router.navigateByUrl('/login');
    }
  }
}
