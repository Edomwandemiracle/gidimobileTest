import { MainPageComponent } from './main-page.component';
import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';

import { AuthenticationGuard } from '../service/auth-guard';

export const appRoutesLazyLoad: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      { path: '', component: HomeComponent },

      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('../admin/admin.module').then((m) => m.AdminModule),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('../user-home/user.module').then((m) => m.UserModule),
      },
    ],
  },
];
