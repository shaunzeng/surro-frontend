import { NgModule } from '@angular/core';
import { TopnavComponent } from './nav/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UnauthorizedComponent } from './unathorized/unauthorized.component';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    TopnavComponent,
    FooterComponent,
    ErrorComponent,
    LoginComponent,
    RegisterComponent,
    UnauthorizedComponent
  ],
  imports: [
    TranslateModule,
    SharedModule,
  ],
  exports: [
    TopnavComponent,
    FooterComponent,
    ErrorComponent,
    LoginComponent,
    RegisterComponent,
    UnauthorizedComponent
  ],
})
export class CoreModule {}