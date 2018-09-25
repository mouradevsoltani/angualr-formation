import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { PrestationsRoutingModuleModule } from './prestations-routing-module.module';

@NgModule({
  imports: [
    CommonModule,
    PrestationsRoutingModuleModule
  ],
  declarations: [ListPrestationsComponent]
})
export class PrestationModule { }
