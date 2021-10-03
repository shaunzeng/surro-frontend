import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { StoreModule, Store } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '@env';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { appInitializer } from './app-initializer';
import { LangService } from './core/services/lang.service';
import { CoreModule } from './core/core.module';
import { reducers, metaReducers } from './store';
import { SharedModule } from '@shared';
import { AuthService } from '@core';

const envImports = environment.production ?
  [] 
  : [
    StoreDevtoolsModule.instrument({
      maxAge:50
    })
  ]


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    TranslateModule.forRoot(),
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    ...envImports
  ],
  declarations: [
    AppComponent,
  ],
  providers: [{
    provide:APP_INITIALIZER,
    useFactory:appInitializer,
    deps:[
      LangService,
      AuthService,
      Store
    ],
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
