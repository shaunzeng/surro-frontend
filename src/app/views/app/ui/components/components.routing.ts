import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { AlertsComponent } from './alerts/alerts.component';
import { BadgesComponent } from './badges/badges.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ChartsComponent } from './charts/charts.component';
import { CollapseComponent } from './collapse/collapse.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { EditorsComponent } from './editors/editors.component';
import { IconsComponent } from './icons/icons.component';
import { InputGroupsComponent } from './input-groups/input-groups.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { MapsComponent } from './maps/maps.component';
import { ModalComponent } from './modal/modal.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PopoverTooltipComponent } from './popover-tooltip/popover-tooltip.component';
import { SortableComponent } from './sortable/sortable.component';
import { TablesComponent } from './tables/tables.component';
import { AccordionComponent } from './accordion/accordion.component';
import { PaginationComponent } from './pagination/pagination.component';

const routes: Routes = [
    {
        path: '', component: ComponentsComponent,
        children: [
            { path: '', redirectTo: 'accordion', pathMatch: 'full' },
            { path: 'accordion', component: AccordionComponent },
            { path: 'alerts', component: AlertsComponent },
            { path: 'badges', component: BadgesComponent },
            { path: 'buttons', component: ButtonsComponent },
            { path: 'cards', component: CardsComponent },
            { path: 'carousel', component: CarouselComponent },
            { path: 'charts', component: ChartsComponent },
            { path: 'collapse', component: CollapseComponent },
            { path: 'dropdowns', component: DropdownsComponent },
            { path: 'editors', component: EditorsComponent },
            { path: 'icons', component: IconsComponent },
            { path: 'input-groups', component: InputGroupsComponent },
            { path: 'jumbotron', component: JumbotronComponent },
            { path: 'maps', component: MapsComponent },
            { path: 'modal', component: ModalComponent },
            { path: 'navigation', component: NavigationComponent },
            { path: 'pagination', component: PaginationComponent },
            { path: 'popover-tooltip', component: PopoverTooltipComponent },
            { path: 'sortable', component: SortableComponent },
            { path: 'tables', component: TablesComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentsRoutingModule { }
