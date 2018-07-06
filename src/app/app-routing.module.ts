import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullLayoutComponent } from './containers/full-layout/full-layout.component';
import { SimpleLayoutComponent } from './containers/simple-layout/simple-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
      },
      {
        path: 'trains',
        loadChildren:
          './trains-dashboard/trains-dashboard.module#TrainsDashboardModule'
      },
      {
        path: 'wagons',
        loadChildren: './wagons/wagons.module#WagonsModule'
      },
      {
        path: '404',
        loadChildren: './not-found/not-found.module#NotFoundModule'
      }
    ]
  },
  {
    path: 'auth',
    component: SimpleLayoutComponent,
    children: []
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
