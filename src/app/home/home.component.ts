import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../User/User.Mod';
import { AuthenticationService } from '../login';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    currentUser: User;

    constructor(//private userService: UserService,
        private authenticationService: AuthenticationService)
    {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.loading = true;
    }
}