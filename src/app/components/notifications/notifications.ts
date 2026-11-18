import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  showNotifications = false;

  notifications = [
    'Nouvelle conférence ajoutée : Angular 21 Conference',
    'Votre inscription au Signals Workshop est confirmée',
  ];

  toggleNotifications(): void {
    this.showNotifications = !this.showNotifications;
  }
}
