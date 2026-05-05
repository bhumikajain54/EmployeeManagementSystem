import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminUpdateComponent } from './admin-update/admin-update.component';
import {authGuard} from "./serives/auth/auth.guard";

const routes: Routes = [

  {path:"show-all-employees",component: EmployeeListComponent,canActivate: [authGuard]},
  {path:"add-employee", component: AddEmployeeComponent,canActivate: [authGuard]},
  {path:'updating-by-id/:id',component:UpdateEmployeeComponent,canActivate: [authGuard]},
  {path:'details-of-employee/:id',component:ShowDetailsComponent,canActivate: [authGuard]},
  {path:'home',component:HomeComponent,canActivate: [authGuard]},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'page-not-found', component:PageNotFoundComponent,canActivate: [authGuard]},
  {path: 'login/Admin-Register', component: AdminRegisterComponent,canActivate: [authGuard] },
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: AdminLoginComponent },
  {path:'Admin-update', component: AdminUpdateComponent,canActivate: [authGuard]},
  { path: 'employees', component: EmployeeListComponent },
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
