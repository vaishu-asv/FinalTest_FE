import { LoginScoutComponent } from './login-scout/login-scout.component';
import { LoginPolarisComponent } from './login-polaris/login-polaris.component';
import { LoginWinnnowComponent } from './login-winnnow/login-winnnow.component';
import { LacLoginComponent } from './lac-login/lac-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'lac-login', component: LacLoginComponent },

  { path: 'login-winnnow', component: LoginWinnnowComponent },

  { path: 'login-polaris', component: LoginPolarisComponent },

  { path: 'login-scout', component: LoginScoutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
