import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadoItemsRoutingModule } from './listado-items-routing-module';
import { ListadoItems } from './listado-items/listado-items';
import { MaterialModule } from '../../materials/material-module';
import { SharedModule } from '../../shared/shared-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Asking } from './listado-items/asking/asking';
import { Happy } from './listado-items/happy/happy';


@NgModule({
  declarations: [
    ListadoItems,
    Asking,
    Happy
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ListadoItemsRoutingModule,
    MaterialModule
  ]
})
export class ListadoItemsModule { }
