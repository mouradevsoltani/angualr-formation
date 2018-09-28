import { Component, OnInit, OnDestroy } from '@angular/core';
import { Prestation } from '../../../shared/models/prestation';
import { PrestationsService } from '../../services/prestations.service';
import { State } from '../../../shared/enums/state.enum';
import { Row } from '../../../shared/interfaces/row';
import { faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit, OnDestroy {

  // public collection: Prestation[];
  public collection$: Observable<Prestation[]>;
  public states = Object.values(State);
  public listHeaders: string[];
  public faPlusCircle = faPlusCircle;
  public faTrash = faTrash;
  public row: Row;
  // public sub: Subscription;
  constructor(private prestationService: PrestationsService) { }


  ngOnInit() {
    this.collection$ = this.prestationService.collection$;
    // this.sub = this.prestationService.collection.subscribe((data) => {
    //   this.collection = data;
    //   console.log(data);
    // });
    this.listHeaders = [
        'Type',
        'Client',
        'Nb Jours',
        'Tjm HT',
        'Total HT',
        'Total TTC',
        'Action',
        'Delete'
    ];

    this.row = {
      route: 'add',
      icon: faPlusCircle,
      libelle: 'Ajouter une prestation'
    };
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }
}
