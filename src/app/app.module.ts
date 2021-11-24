import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListPeopleComponent } from './components/list-people/list-people.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    FormularioComponent,
    ListPeopleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
