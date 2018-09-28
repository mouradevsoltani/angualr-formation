import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { PrestationsRoutingModuleModule } from './prestations-routing-module.module';
import { SharedModule } from '../shared/shared.module';
import { PrestationComponent } from '../prestation/components/prestation/prestation.component';
import { FormComponent } from '../prestation/components/form/form.component';
import { AddPrestationComponent } from '../prestation/containers/add-prestation/add-prestation.component';
import { EditPrestationComponent } from '../prestation/containers/edit-prestation/edit-prestation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormReactiveComponent } from '../prestation/components/form-reactive/form-reactive.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    PrestationsRoutingModuleModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  // tslint:disable-next-line:max-line-length
  declarations: [ListPrestationsComponent, PrestationComponent, FormComponent, AddPrestationComponent, EditPrestationComponent, FormReactiveComponent]
})
export class PrestationModule { }
