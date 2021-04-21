import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { loginReducer } from './core/store/reducer/login.reducer';
import { LoginEffects } from './core/store/effect/login.effect';
import { RegisterEffects } from './core/store/effect/register.effect';
import { registerReducer } from './core/store/reducer/register.reducer';
import { profileReducer } from './core/store/reducer/profile.reducer';
import { ProfileEffects } from './core/store/effect/profile.effect';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CoreModule,
    BrowserModule,
    SharedModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,

    StoreModule.forRoot({ login: loginReducer, register: registerReducer, profile: profileReducer }, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([LoginEffects, RegisterEffects, ProfileEffects]),
    StoreRouterConnectingModule.forRoot()
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
