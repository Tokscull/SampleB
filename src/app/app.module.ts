import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import {CarComponent} from './components/car/car.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {ColorService} from './serveces/color/color.service';
import {StatusCodeService} from './serveces/status-code/status-code.service';
import {StatusCodesComponent} from './components/status-codes/status-codes.component';
import {StatusCodeComponent} from './components/status-codes/status-code/status-code.component';
import { SearchPipe } from './pipe/search/search.pipe';


const appRouter: Routes = [
  {path: '', component: CarComponent},
  {path: 'about', component: ContactsComponent},
   {path: 'status-codes', component: StatusCodesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    ContactsComponent,
    StatusCodesComponent,
    StatusCodeComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [ColorService, StatusCodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
