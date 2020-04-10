import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers/auth.guard';
import { AbsenceComponent } from './Absence/Absence.Comp';
import { Role } from './_helpers';

const routes: Routes = [
    {
        path:'absence',
        component:AbsenceComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.admin] }
    },
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.admin] }
    },
    {
        path: 'login',
        component: LoginComponent
    },

    // otherwise redirect to home
    //Commented because routes after are ignored.
    //{ path: '**', redirectTo: '' } 
];

export const appRoutingModule = RouterModule.forRoot(routes);