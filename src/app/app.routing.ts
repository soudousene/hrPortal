import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { Role } from './_models/index';
import { AuthGuard } from './_helpers/auth.guard';
import { AbsenceComponent } from './Absence/Absence.Comp';

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
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);