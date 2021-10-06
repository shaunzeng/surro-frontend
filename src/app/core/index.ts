import { CoreModule } from './core.module';
import { GlobalErrorHandler } from './error/global-error.handler';
import { HttpLoadingInterceptor } from './error/http-loading.interceptor';
import { isAuthenticated } from './services/auth.guard';
import { isNotAuthenticated } from './services/notAuth.guard';
import { AuthService } from './services/auth.service';
import { LangService , Language} from './services/lang.service';

export {
    CoreModule,
    GlobalErrorHandler,
    HttpLoadingInterceptor,
    isAuthenticated,
    isNotAuthenticated,
    AuthService,
    LangService,
    Language
};