import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import {Routes, RouterModule} from '@angular/router'

import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';


const appRout:Routes = [
  {path:'site', component: AppComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRout),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
