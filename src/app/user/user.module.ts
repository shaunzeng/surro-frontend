import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UserRoutingModule } from './user.routing';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule} from '@core';

@NgModule({
  imports: [
    HttpClientModule,
    UserRoutingModule,
    SharedModule,
    CoreModule,
    TranslateModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
})
export class UserModule { }