import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoItems } from './listado-items/listado-items';

const routes: Routes = [
  {
    path: '',
    component: ListadoItems,
    title: 'Carta para Ahori'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadoItemsRoutingModule { }
