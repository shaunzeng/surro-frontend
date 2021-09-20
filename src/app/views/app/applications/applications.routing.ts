import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationsComponent } from './applications.component';
import { TodoComponent } from './todo/todo.component';
import { SurveyComponent } from './survey/survey.component';
import { ChatComponent } from './chat/chat.component';
import { SurveyDetailComponent } from './survey-detail/survey-detail.component';

const routes: Routes = [
    {
        path: '', component: ApplicationsComponent,
        children: [
            { path: '', redirectTo: 'todo', pathMatch: 'full' },
            { path: 'todo', component: TodoComponent },
            { path: 'survey/:id/:name', component: SurveyDetailComponent },
            { path: 'survey/:id', component: SurveyDetailComponent },
            { path: 'survey', component: SurveyComponent },
            { path: 'chat', component: ChatComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ApplicationsRoutingModule { }
