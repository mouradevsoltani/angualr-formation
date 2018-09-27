import { Component, OnInit } from '@angular/core';
import { State } from '../../../shared/enums/state.enum';
import { Row } from '../../../shared/interfaces/row';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Client } from '../../../shared/models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {

  public collection: Client[];
  public states = Object.values(State);
  public listHeaders: string[];
  public faPlusCircle = faPlusCircle;
  public row: Row;
  constructor(private clientService: ClientService) { }


  ngOnInit() {
    this.collection = this.clientService.collection;
    this.listHeaders = [
        'Id',
        'name',
        'Emails',
        'Tel',
        'Contact',
        'Action'
    ];

    this.row = {
      route: 'add',
      icon: faPlusCircle,
      libelle: 'Ajouter une prestation'
    };
  }

}
