import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './component/inscription/inscription.component';
import { StartComponent } from './component/start/start.component';



const routes: Routes = [
  {path:"acceuil",component:StartComponent},
  {path:"inscription", component:InscriptionComponent},
  {path:"",component:StartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
