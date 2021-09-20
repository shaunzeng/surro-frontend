import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MiscellaneousComponent } from './miscellaneous.component';
import { MiscellaneousRoutingModule } from './miscellaneous.routing';
import { InvoiceComponent } from './invoice/invoice.component';
import { MailingComponent } from './mailing/mailing.component';
import { SearchComponent } from './search/search.component';
import { ErrorComponent } from './error/error.component';
import { FaqComponent } from './faq/faq.component';
import { KnowledgeBaseComponent } from './knowledge-base/knowledge-base.component';
import { PricesComponent } from './prices/prices.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { ComponentsCardsModule } from 'src/app/components/cards/components.cards.module';
import { PagesContainersModule } from 'src/app/containers/pages/pages.containers.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { CollapseModule } from 'ngx-bootstrap/collapse';


@NgModule({
  declarations: [InvoiceComponent, MailingComponent,
    SearchComponent,
    MiscellaneousComponent, ErrorComponent, FaqComponent, KnowledgeBaseComponent,
    PricesComponent, ComingSoonComponent],
  imports: [
    SharedModule,
    MiscellaneousRoutingModule,
    LayoutContainersModule,
    ComponentsCardsModule,
    PagesContainersModule,
    PaginationModule.forRoot(),
    CollapseModule.forRoot()
  ]
})
export class MiscellaneousModule { }
