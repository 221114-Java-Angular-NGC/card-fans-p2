import { Component } from '@angular/core';
import { AuthService } from './services/authentication/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'web-app';
  public authenticated: boolean = false;
  constructor(private authServ: AuthService) {}

  ngOnInit(): void {
    //log out user when page refreshed
    //until a log out button is made
    localStorage.removeItem('username');
    localStorage.removeItem('currentUser');

    //subscribe to log in and log out events
    this.authServ.currentUser.subscribe((data) => {
      if (typeof data == 'boolean') {
        this.authenticated = data;
      }
    });
  }
}
