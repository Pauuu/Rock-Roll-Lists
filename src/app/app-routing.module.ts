import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandDetailComponent } from './components/band-detail/band-detail.component';
import { BandsComponent } from './components/bands/bands.component';

const routes: Routes = [
  // TODO: cambiar la ruta por defecto
  {path: '', redirectTo: '/bandDetail/1', pathMatch: 'full'},
  {path: 'bands', component: BandsComponent},
  {path: 'bandDetail/:id', component: BandDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
