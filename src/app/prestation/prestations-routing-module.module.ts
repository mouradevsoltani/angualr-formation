import { NgModule } from '@angular/core';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: ListPrestationsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes,
    )
  ]
})
export class PrestationsRoutingModuleModule { }
