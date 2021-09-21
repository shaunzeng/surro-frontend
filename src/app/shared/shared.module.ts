import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { UnauthorizedComponent } from './components/unathorized/unauthorized.component';
import { ErrorComponent } from './components/error/error.component';
import { TopnavComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    ErrorComponent, 
    UnauthorizedComponent, 
    TopnavComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    TranslateModule,
    PerfectScrollbarModule,
    FormsModule
  ],
  exports: [
    PerfectScrollbarModule,
    RouterModule,
    ErrorComponent,
    TopnavComponent,
    UnauthorizedComponent,
    TranslateModule,
    CommonModule,
  ],
})
export class SharedModule {}
