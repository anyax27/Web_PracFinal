import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventoComponent } from './evento/evento.component';
import { AsistenteComponent } from './asistente/asistente.component';
import { EventosformComponent } from './eventosform/eventosform.component';
import { AsistenteformComponent } from './asistenteform/asistenteform.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'evento', component : EventoComponent},
  { path : 'eventosForm/:id', component : EventosformComponent},
  { path: 'asistentes', component : AsistenteComponent},
  { path: 'asistentesForm/:id', component : AsistenteformComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
