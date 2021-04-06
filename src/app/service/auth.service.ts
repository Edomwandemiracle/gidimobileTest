import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

let users = [new User('admin', '123'), new User('user', '123')];

@Injectable()
export class AuthenticationService {
  user = new User();
  // userType: BehaviorSubject<string> = new BehaviorSubject<string>(
  //   this.getUserType()
  // );

  constructor(private _router: Router) {}

  // getUserType() {
  //   return localStorage.getItem('user');
  // }

  get isLoggedIn() {
    return true;
  }

  isSuperAdmin() {
    if (localStorage.getItem('user') === 'admin') {
      return true;
    } else {
      return false;
    }
  }

  login(username: string, password: string) {
    this.user.username = username;
    this.user.password = password;
    if (username === 'admin') {
      this._router.navigate(['/admin']);
    }
    if (username === 'user') {
      this._router.navigate(['/home']);
    }

    // let authenticatedUser = users.find(
    //   (u) => u.username === this.user.username
    // );
    // if (authenticatedUser && authenticatedUser.password == this.user.password) {
    //   localStorage.setItem('user', this.user.username);
    //   this.userType.next(this.user.username);
    //   this._router.navigate(['/admin']);
    // }
  }
}
