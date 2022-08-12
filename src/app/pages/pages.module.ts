import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewGeneralComponent } from './dashboard/views/view-general/view-general.component';
import { ViewAreasComponent } from './dashboard/views/view-areas/view-areas.component';
import { ViewClientesComponent } from './dashboard/views/view-clientes/view-clientes.component';

const routes: Routes = [
  { path: '', component: ViewGeneralComponent },
  { path: 'areas', component: ViewAreasComponent },
  { path: 'clientes', component: ViewClientesComponent },
];

@NgModule({
  declarations: [
    DashboardComponent,
    ViewGeneralComponent,
    ViewAreasComponent,
    ViewClientesComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ComponentsModule,
    RouterModule
  ]
})
export class PagesModule { }
