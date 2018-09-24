import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './containers/ui/ui.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListPrestationsComponent } from '../prestation/containers/list-prestations/list-prestations.component';


@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  declarations: [
    UiComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    ListPrestationsComponent
  ],
  exports: [
    UiComponent
  ]
})
export class UiModule { }
