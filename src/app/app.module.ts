import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
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
import {CarouselModule, TooltipModule} from 'ngx-bootstrap';
import {CarouselBasicComponentComponent} from './components/carousel-basic-component/carousel-basic-component.component';
import {SearchPipe} from './pipes/search/search.pipe';
import {HttpClientModule} from '@angular/common/http';
import { StudentComponent } from './components/student/student.component';
import {HttpService} from './services/http/http.service';
import {ImsComponent} from './components/ims/ims.component';


const appRouter: Routes = [
    {path: '', component: CarComponent},
    {path: 'about', component: ContactsComponent},
    {path: 'status-codes', component: StatusCodesComponent},
    {path: 'students', component: StudentComponent},
    {path: 'ims', component: ImsComponent}
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
        ImsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        TooltipModule.forRoot(),
        RouterModule.forRoot(appRouter),
        CarouselModule,
        HttpClientModule

    ],
    providers: [ColorService, StatusCodeService , HttpService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

