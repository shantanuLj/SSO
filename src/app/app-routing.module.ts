import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componants/dashboard/dashboard.component';
import { LoginComponent } from './sso-auth/login/login.component';
import { AuthGuardGuard } from './auth/auth-guard.guard';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate : [AuthGuardGuard] },
  { path: 'eas/ssovalidation.do', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
