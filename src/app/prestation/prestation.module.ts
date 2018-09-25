import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { PrestationsRoutingModuleModule } from './prestations-routing-module.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PrestationsRoutingModuleModule,
    SharedModule
  ],
  declarations: [ListPrestationsComponent]
})
export class PrestationModule { }
