import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { InterconexionComponent } from './interconexion/interconexion.component';
import { NosotrosComponent } from './nosotros/nosotros.component';


const routes: Routes = [
  {path:"",component:HomepageComponent},
  {path:"interconexion",component:InterconexionComponent},
  {path:"nosotros",component:NosotrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
