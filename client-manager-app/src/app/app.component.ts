import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client-manager-app';

  authenticated: boolean = false;

  onAuthenticated(authenticated: boolean): void {
    this.authenticated = authenticated;
  }
}
