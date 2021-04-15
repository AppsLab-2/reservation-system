import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { LoginComponent } from './core/component/login/login.component';
import { RegisterComponent } from './core/component/register/register.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule) },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard]  },
  { path: 'business', loadChildren: () => import('./modules/business/business.module').then(m => m.BusinessModule), canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
