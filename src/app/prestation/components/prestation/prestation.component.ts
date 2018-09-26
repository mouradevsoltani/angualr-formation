import { Component, OnInit, Input } from '@angular/core';
import { Prestation } from '../../../shared/models/prestation';
import { State } from '../../../shared/enums/state.enum';
import { PrestationsService } from '../../services/prestations.service';

@Component({
  selector: '[app-prestation], app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {
  public states = Object.values(State);
  @Input() item: Prestation;
  constructor(
    private pestationService: PrestationsService
  ) {
    console.log(this.item);
   }
  ngOnInit() {
  }

  public changeState(e) {
    const state = e.target.value;
    this.pestationService.update(this.item, state);
  }

}
