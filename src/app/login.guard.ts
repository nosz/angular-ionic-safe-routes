import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// add the CanActivate
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

// implements CanActivate
export class LoginGuard implements CanActivate {

  constructor(private router: Router) {}

  // change this to false and the route 'safed' is not safe!
  isSafed = true;

  // implement the canActivate function
  canActivate() {
    // here you check; maybe from a login-service
    // in this example we use the variable isSafed
    if (this.isSafed) {
      alert('routing to page safed works not; because isSafed is true');
      // routing to the route home
      this.router.navigate(['/home'], {});
    } else {
      alert('routing to page safe works; because isSafed is false')
    }
    return true;
  }
}