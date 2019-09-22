# Step by Step Example Angular Ionic <br>create safed routes

of the  
[Ionic Framework](https://ionicframework.com/)  and [Angular](https://angular.io/)

## Table of Contents

- [Getting Started](#getting-started)
- [Step by Step Example Angular Ionic create reactive form](#step-by-step)

## Getting Started

1. [Download the installer](https://nodejs.org/) for Node.js
   - check it with: `node --version`
2. Install the angular CLI globally: `npm install -g @angular/cli`
   - check it with: `ng --version`
3. Install the ionic CLI globally: `npm install -g ionic`
   - check it with: `ionic --version`
4. Install Ionic native-run `npm i -g native-run`
5. Create Ionic Template blank: `ionic start YourProjectName blank`
   - creates a new Folder with the Name: YourProjectName and with the blank template
6. Go to your newly created project: `cd .\YourProjectName`
7. Run `ionic serve` within the app directory to see your app
   - you see it in: [localhost:8100](http://localhost:8100)

## Step by Step

1. create new page who you want to make safe:
run `ionic g page safed`

2. create a guard who controls the routes;here e.g login guard
run `ionic g guard login` or `ng g guard login`

3. change src/app/login.guard.ts
```typescript
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
```

4. change src/app/app-routing.module.ts
```typescript
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// add the created LoginGuard
import { LoginGuard } from './login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  // add the canActivate and LoginGuard to the specific route
  { path: 'safed', canActivate: [LoginGuard], loadChildren: './safed/safed.module#SafedPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```

5. test it; change src/app/home/home.page.html
```html
<ion-header>
  <ion-toolbar>
    <ion-title>
      Ionic Routes with Guard
    </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-button [routerLink]="['/safed']">Navigate to Page safed</ion-button>
</ion-content>
```

Ready 



