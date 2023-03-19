import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPage } from './user.page';

const routes: Routes = [
  {
    path: '',
    component: UserPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'achievements',
        loadChildren: () => import('./pages/passwords/passwords.module').then( m => m.PasswordsPageModule)
      },
      {
        path: 'leaderboard',
        loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
      },
      {
        path: 'subjects',
        loadChildren: () => import('./pages/tools/tools.module').then( m => m.ToolsPageModule)
      }
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPageRoutingModule {}
