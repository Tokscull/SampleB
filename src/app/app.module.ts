import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {CarComponent} from './components/car/car.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {ColorService} from './services/color/color.service';
import {StatusCodeService} from './services/status-code/status-code.service';
import {StatusCodesComponent} from './components/status-codes/status-codes.component';
import {StatusCodeComponent} from './components/status-codes/status-code/status-code.component';
import {ChangeColorDirective} from './directives/changeColor/change-color.directive';
import {StatusCodeFillPipePipe} from './pipes/statusCodeFillPipe/status-code-fill-pipe.pipe';
import {CarouselModule, ModalModule, TooltipModule} from 'ngx-bootstrap';
import {CarouselBasicComponentComponent} from './components/carousel-basic-component/carousel-basic-component.component';
import {SearchPipe} from './pipes/search/search.pipe';
import {HttpClientModule} from '@angular/common/http';
import { StudentComponent } from './components/student/student.component';
import {HttpService} from './services/http/http.service';
import {ImsComponent} from './components/ims/ims.component';
import { Db2Component } from './components/db2/db2.component';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import {NgbAlertModule, NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';


const appRouter: Routes = [
    {path: '', component: CarComponent},
    {path: 'about', component: ContactsComponent},
    {path: 'status-codes', component: StatusCodesComponent},
    {path: 'students', component: StudentComponent},
    {path: 'ims', component: ImsComponent},
    {path: 'db2', component: Db2Component}
];

@NgModule({
    declarations: [
        AppComponent,
        CarComponent,
        ContactsComponent,
        StatusCodesComponent,
        StatusCodeComponent,
        SearchPipe,
        ChangeColorDirective,
        StatusCodeFillPipePipe,
        CarouselBasicComponentComponent,
        StudentComponent,
        ImsComponent,
        Db2Component,
        ModalWindowComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        TooltipModule.forRoot(),
        RouterModule.forRoot(appRouter),
        CarouselModule,
        ModalModule,
        NgbModule, NgbPaginationModule, NgbAlertModule,
        HttpClientModule
    ],
    providers: [ColorService, StatusCodeService , HttpService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

