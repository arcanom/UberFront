import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceptCourseComponent } from './component/accept-course/accept-course.component';
import { CourseComponent } from './component/course/course.component';
import { FormulairePassagerComponent } from './component/formulaire-passager/formulaire-passager.component';
import { InscriptionComponent } from './component/inscription/inscription.component';
import { MainComponent } from './component/main/main.component';
import { StartComponent } from './component/start/start.component';



const routes: Routes = [
  {path:"acceuil",component:StartComponent},
  {path:"inscription", component:InscriptionComponent},
  {path:"main",component:MainComponent},
  {path:"formulaire-passager",component:FormulairePassagerComponent},
  {path:"course",component:CourseComponent},
  {path:"accept-course", component:AcceptCourseComponent},
  {path:"",component:StartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
