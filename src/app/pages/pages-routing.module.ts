import { ViewClientesComponent } from './dashboard/views/view-clientes/view-clientes.component';
import { ViewAreasComponent } from './dashboard/views/view-areas/view-areas.component';
import { ViewGeneralComponent } from './dashboard/views/view-general/view-general.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'',component:ViewGeneralComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
