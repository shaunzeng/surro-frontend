import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { appInitializer } from './app-initializer';
import { SharedModule } from './shared/shared.module';
import { LangService } from './core/services/lang.service';
import { CoreModule } from './core/core.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    TranslateModule.forRoot(),
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
