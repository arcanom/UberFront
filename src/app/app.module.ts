import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { HeaderComponent } from './shared/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StartComponent } from './component/start/start.component';
import { InscriptionComponent } from './component/inscription/inscription.component';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './component/main/main.component';
import { FormulairePassagerComponent } from './component/formulaire-passager/formulaire-passager.component';
import { CourseComponent } from './component/course/course.component';
import { AcceptCourseComponent } from './component/accept-course/accept-course.component';


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    HeaderComponent,
    InscriptionComponent,
    MainComponent,
    FormulairePassagerComponent,
    CourseComponent,
    AcceptCourseComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
