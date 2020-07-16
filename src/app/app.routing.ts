import { DepartmentComponent } from './Department/Department.Comp';
import { UserComponent } from './User/User.Comp';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers/auth.guard';
import { AbsenceComponent } from './Absence/Absence.Comp';
import { Role } from './_helpers';
import { PwdLostComponent } from './login/pwdLost.component';

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
    {
        path: 'pwdlost',
        component: PwdLostComponent
    },


    // otherwise redirect to home
    //Commented because routes after are ignored.
    //{ path: '**', redirectTo: '' } 

	{
		path: 'user', 
		component: UserComponent, 
		canActivate: [AuthGuard],
		data: {roles: [Role.admin]}
	},
	{
		path: 'department', 
		component: DepartmentComponent, 
		canActivate: [AuthGuard],
		data: {roles: [Role.admin]}
	},];

export const appRoutingModule = RouterModule.forRoot(routes);