import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MiscellaneousComponent } from './miscellaneous.component';
import { MailingComponent } from './mailing/mailing.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { SearchComponent } from './search/search.component';
import { FaqComponent } from './faq/faq.component';
import { PricesComponent } from './prices/prices.component';
import { KnowledgeBaseComponent } from './knowledge-base/knowledge-base.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';

const routes: Routes = [
  {
    path: '', component: MiscellaneousComponent,
    children: [
      { path: '', redirectTo: 'mailing', pathMatch: 'full' },
      { path: 'mailing', component: MailingComponent },
      { path: 'invoice', component: InvoiceComponent },
      { path: 'search', component: SearchComponent },
      { path: 'faq', component: FaqComponent },
      { path: 'prices', component: PricesComponent },
      { path: 'knowledge-base', component: KnowledgeBaseComponent },
      { path: 'coming-soon', component: ComingSoonComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiscellaneousRoutingModule { }
