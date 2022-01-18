import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UserRoutingModule } from './user.routing';
import { UserProfileContainer } from './containers/user-profile.container';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { ProfileComponent } from './components/profile.component';
import { UserAccountContainer} from './containers/user-account.container';

@NgModule({
  imports: [
    HttpClientModule,
    UserRoutingModule,
    SharedModule,
    CoreModule,
    TranslateModule,
  ],
  declarations: [
    UserProfileContainer,
    ProfileComponent,
    UserAccountContainer
  ],
  providers: [],
})
export class UserModule { }