import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Role } from './_helpers';
import { User } from './User/User.Mod';
import { AuthenticationService } from './login';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser: User;

    constructor(private router: Router,
        private authenticationService: AuthenticationService) 
    {
        this.authenticationService.currentUser.subscribe(x => 
        {
            this.currentUser = x;
        });
    }

    get isAdmin() {
        return this.currentUser && this.currentUser.role === Role.admin;
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}