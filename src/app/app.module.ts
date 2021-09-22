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
import { SimpleNotificationsModule } from 'angular2-notifications';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { LangService } from './shared/lang.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    HeadroomModule,
    SimpleNotificationsModule.forRoot(),
    PopoverModule.forRoot(),
    SharedModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [{
    provide:APP_INITIALIZER,
    useFactory:appInitializer,
    deps:[LangService],
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
