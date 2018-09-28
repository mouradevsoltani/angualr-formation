import { NgModule } from '@angular/core';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { RouterModule, Routes } from '@angular/router';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { EditPrestationComponent } from './containers/edit-prestation/edit-prestation.component';
import { ResolveService } from './services/resolve.service';

const appRoutes: Routes = [
  { path: '', component: ListPrestationsComponent },
  { path: 'add', component: AddPrestationComponent },
  {
    path: 'edit/:id',
    component: EditPrestationComponent,
    resolve: {
      item: ResolveService
    }
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes,
    )
  ]
})
export class PrestationsRoutingModuleModule { }
