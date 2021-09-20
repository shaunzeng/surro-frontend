import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { ComponentsComponent } from './components.component';
import { ComponentsRoutingModule } from './components.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsChartModule } from 'src/app/components/charts/components.charts.module';
import { AccordionComponent } from './accordion/accordion.component';
import { ComponentsCarouselModule } from 'src/app/components/carousel/components.carousel.module';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { AgmCoreModule } from '@agm/core';
import { YaCoreModule } from 'yamapng';
import { YamapngModule } from 'yamapng';
import { PaginationComponent } from './pagination/pagination.component';
import { SortablejsModule } from 'ngx-sortablejs';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { ComponentsStateButtonModule } from 'src/app/components/state-button/components.state-button.module';
import { BootstrapModule } from 'src/app/components/bootstrap/bootstrap.module';
import { UiCardsContainersModule } from 'src/app/containers/ui/cards/ui.cards.containers.module';
import { UiModalsContainersModule } from 'src/app/containers/ui/modals/ui.modals.containers.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';

@NgModule({
  declarations: [
    AccordionComponent,
    AlertsComponent,
    BadgesComponent,
    ButtonsComponent,
    CardsComponent,
    CarouselComponent,
    ChartsComponent,
    CollapseComponent,
    DropdownsComponent,
    EditorsComponent,
    IconsComponent,
    InputGroupsComponent,
    JumbotronComponent,
    MapsComponent,
    ModalComponent,
    NavigationComponent,
    PopoverTooltipComponent,
    SortableComponent,
    TablesComponent,
    ComponentsComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsRoutingModule,
    UiCardsContainersModule,
    ComponentsChartModule,
    ComponentsCarouselModule,
    FormsModule,
    UiModalsContainersModule,
    QuillModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCO8MfadmlotuuHC8wmjwL_46I5QAMIiRU'
    }),
    YamapngModule,
    YaCoreModule.forRoot({ apiKey: '658f67a2-fd77-42e9-b99e-2bd48c4ccad4' }),
    SortablejsModule,
    SimpleNotificationsModule.forRoot(),
    LayoutContainersModule,
    ComponentsStateButtonModule,
    BootstrapModule
  ]
})
export class ComponentsModule { }


