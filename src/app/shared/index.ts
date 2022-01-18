import { BodyOnlyLayoutComponent } from './layout/body-only/body-only.layout';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderFooterLayoutComponent } from './layout/header-footer/header-footer.layout';
import { TopnavComponent } from './layout/nav/navigation.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/notFound/notFound.component';
import { RegisterComponent } from './pages/register/register.component';
import { UnauthorizedComponent } from './pages/unathorized/unauthorized.component';
import { SharedModule } from './shared.module';
import * as actions from './pages/data/actions';
import * as selectors from './pages/data/selectors';

export {
    SharedModule,
    HeaderFooterLayoutComponent,
    BodyOnlyLayoutComponent,
    ForgetPasswordComponent,
    LoginComponent,
    NotFoundComponent,
    RegisterComponent,
    UnauthorizedComponent,
    FooterComponent,
    TopnavComponent,
    actions,
    selectors
}