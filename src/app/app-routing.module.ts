import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresoComponent } from './componentes/ingreso/ingreso.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RegistroComponent } from './componentes/registro/registro.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full'},
  { path: 'inicio', component: InicioComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'ingreso', component: IngresoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
