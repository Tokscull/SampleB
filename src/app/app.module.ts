import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import {CarComponent} from './components/car/car.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {ColorService} from './serveces/color/color.service';

const appRouter: Routes = [
  {path: '', component: CarComponent},
  {path: 'about', component: ContactsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [ColorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
