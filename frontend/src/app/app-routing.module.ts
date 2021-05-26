import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './core/component/landing/landing.component';
import { LoginComponent } from './core/component/login/login.component';
import { RegisterComponent } from './core/component/register/register.component';

import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'client',
    loadChildren: () => import('./client/client.module').then(m => m.ClientModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'business',
    loadChildren: () => import('./business/business.module').then(m => m.BusinessModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
