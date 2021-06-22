import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandDetailComponent } from './components/band-detail/band-detail.component';
import { BandsComponent } from './components/bands/bands.component';
import { BandNewComponent } from './components/band-new/band-new.component';

const routes: Routes = [
  // TODO: cambiar la ruta por defecto
  {path: '', redirectTo: 'bands', pathMatch: 'full'},
  {path: 'bands', component: BandsComponent},
  {path: 'bands/:id', component: BandDetailComponent},
  {path: 'bandNew', component: BandNewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
