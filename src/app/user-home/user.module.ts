import { SearchPipe } from './search.pipe';
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
// import { SharedModule } from './../../../shared/shared.module';
import { MDBBootstrapModule, NavbarService } from 'angular-bootstrap-md';
import { UserHomeComponent } from './user-home.component';

export const appRoutes: Routes = [
  { path: '', component: UserHomeComponent },
  { path: 'user', component: UserHomeComponent },
];

@NgModule({
  declarations: [UserHomeComponent, SearchPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule,
    RouterModule.forChild(appRoutes),
  ],
  providers: [NavbarService],
})
export class UserModule {}
