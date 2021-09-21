import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appInitializer } from './app-initializer';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent
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
