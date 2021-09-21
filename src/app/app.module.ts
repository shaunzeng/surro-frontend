import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { HeadroomModule } from '@ctrl/ngx-headroom';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { appInitializer } from './app-initializer';
import { SharedModule } from './shared/shared.module';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    HeadroomModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [{
    provide:APP_INITIALIZER,
    useFactory:appInitializer,
    deps:[],
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
