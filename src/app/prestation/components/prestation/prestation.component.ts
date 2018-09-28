import { Component, OnInit, Input } from '@angular/core';
import { Prestation } from '../../../shared/models/prestation';
import { State } from '../../../shared/enums/state.enum';
import { PrestationsService } from '../../services/prestations.service';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: '[app-prestation], app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {
  public states = Object.values(State);
  public faTrashAlt = faTrashAlt;
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
    this.pestationService.update(this.item, state).then((data) => {
      this.item.state = state;
      this.pestationService.msg$.next('Statut changé en ' + state);
    });
  }

  public delete() {
    this.pestationService.delete(this.item).then((data) => {
      this.pestationService.msg$.next('Prestation supprimée !');
    });
  }

}
