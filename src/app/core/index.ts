import { CoreModule } from './core.module';
import { NotFoundComponent } from './notFound/notFound.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { TopnavComponent } from './nav/navigation.component';
import { RegisterComponent } from './register/register.component';
import { UnauthorizedComponent } from './unathorized/unauthorized.component';
import { GlobalErrorHandler } from './error/global-error.handler';
import { HttpLoadingInterceptor } from './error/http-loading.interceptor';
import { isAuthenticated } from './services/auth.guard';
import { isNotAuthenticated } from './services/notAuth.guard';
import { AuthService } from './services/auth.service';

export {
    CoreModule ,
    TopnavComponent,
    FooterComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    UnauthorizedComponent,
    GlobalErrorHandler,
    HttpLoadingInterceptor,
    isAuthenticated,
    isNotAuthenticated,
    AuthService
};