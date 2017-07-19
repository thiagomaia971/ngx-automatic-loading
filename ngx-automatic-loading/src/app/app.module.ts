import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserXhr } from '@angular/http';

import { AppComponent } from './app.component';
import { LoadingButtonDirective } from './_shared/directives/loading-button.directive';
import { LoadingButtonService } from './_shared/services/loading-button.service';

import { LaddaModule } from 'angular2-ladda';

import { MyBrowserXhr } from './_shared/services/my-browser-xhr.service';

@NgModule({
  imports: [
    BrowserModule,
    LaddaModule.forRoot({
      style: "zoom-in",
      spinnerColor: "rgb(204, 24, 30)",
      spinnerSize: 40,
      spinnerLines: 12
    }),
  ],
  declarations: [
    LoadingButtonDirective
  ],
  exports: [
    LoadingButtonDirective
  ],
  providers: [
    LoadingButtonService
  ]
  //bootstrap: [AppComponent]
})
export class AutomaticLoadingModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: AutomaticLoadingModule,
      providers: [
         { provide: BrowserXhr, useClass: MyBrowserXhr }
      ]
    };
  }
 }
