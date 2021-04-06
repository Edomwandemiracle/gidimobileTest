import { appRoutesLazyLoad } from './lazy-load.route';
import { RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SharedModule } from './../../../shared/shared.module';
import { MDBBootstrapModule, NavbarService } from 'angular-bootstrap-md';
import { AuthenticationService } from '../service/auth.service';
import { AuthenticationGuard } from '../service/auth-guard';

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutesLazyLoad),
    MDBBootstrapModule,
  ],
  providers: [NavbarService, AuthenticationService, AuthenticationGuard],
})
export class MainPageModule {}
