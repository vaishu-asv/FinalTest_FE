import { QuickUiModule } from 'quick-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LacLoginComponent } from './lac-login/lac-login.component';
import { LoginWinnnowComponent } from './login-winnnow/login-winnnow.component';
import { LoginPolarisComponent } from './login-polaris/login-polaris.component';
import { LoginScoutComponent } from './login-scout/login-scout.component';


@NgModule({
  declarations: [
    LacLoginComponent,
    LoginWinnnowComponent,
    LoginPolarisComponent,
    LoginScoutComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ,	QuickUiModule,
]
})
export class AuthenticationModule { }
