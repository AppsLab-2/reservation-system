import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from './guard/module-import.guard';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    throwIfAlreadyLoaded(parent, 'CoreModule');
  }
}
