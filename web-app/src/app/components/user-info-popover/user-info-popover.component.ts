import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'info-popover',
  templateUrl: './user-info-popover.component.html',
  styleUrls: ['./user-info-popover.component.css'],
})
export class UserInfoPopoverComponent {
  currentUser?: User | undefined;

  constructor(private router: Router, private authServ: AuthService) {
    let temp = localStorage.getItem('currentUser');
    if (temp) {
      this.currentUser = JSON.parse(temp);
    }
  }

  logout() {
    this.authServ.logout();
  }
}
