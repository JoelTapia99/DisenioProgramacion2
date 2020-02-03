import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonasComponent } from './componentes/personas/personas.component';


const routes: Routes = [
  { path: '', redirectTo: '/detalles', pathMatch: 'full' },
  { path:"detalles", component: PersonasComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
