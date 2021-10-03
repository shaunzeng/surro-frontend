import { ErrorHandler, NgModule } from '@angular/core';
import { TopnavComponent } from './nav/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './notFound/notFound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UnauthorizedComponent } from './unathorized/unauthorized.component';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlobalErrorHandler } from './error/global-error.handler';
import { HttpLoadingInterceptor } from './error/http-loading.interceptor';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

@NgModule({
  declarations: [
    TopnavComponent,
    FooterComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    UnauthorizedComponent,
    ForgetPasswordComponent
  ],
  imports: [
    TranslateModule,
    SharedModule,
  ],
  providers:[
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLoadingInterceptor,
      multi: true,
    },
  ],
  exports: [
    TopnavComponent,
    FooterComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    UnauthorizedComponent,
    ForgetPasswordComponent
  ],
})
export class CoreModule {}