import { Component, OnInit } from '@angular/core';
import { Prestation } from '../../../shared/models/prestation';
import { PrestationsService } from '../../services/prestations.service';
import { State } from '../../../shared/enums/state.enum';
import { Row } from '../../../shared/interfaces/row';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit {

  public collection: Prestation[];
  public states = Object.values(State);
  public listHeaders: string[];
  public faPlusCircle = faPlusCircle;
  public row: Row;
  constructor(private prestationService: PrestationsService) { }


  ngOnInit() {
    this.collection = this.prestationService.collection;
    this.listHeaders = [
        'Type',
        'Client',
        'Nb Jours',
        'Tjm HT',
        'Total HT',
        'Total TTC',
        'Action'
    ];

    this.row = {
      route: 'add',
      icon: faPlusCircle,
      libelle: 'Ajouter une prestation'
    };
  }

}
