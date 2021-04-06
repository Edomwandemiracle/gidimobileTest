import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
// import { SharedModule } from './../../../shared/shared.module';
import { MDBBootstrapModule, NavbarService } from 'angular-bootstrap-md';
import { AdminComponent } from './admin.component';

export const appRoutes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule,
    RouterModule.forChild(appRoutes),
  ],
  providers: [NavbarService],
})
export class AdminModule {}
