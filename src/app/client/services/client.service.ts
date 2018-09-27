import { Injectable } from '@angular/core';
import { Client } from '../../shared/models/client';
import { fakeClients } from './fakeclients';
import { State } from '../../shared/enums/state.enum';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private _collection: Client[];
  constructor() {
    this._collection = fakeClients;
  }

  // get collection
  get collection(): Client[] {
    return this._collection;
  }

  // set collection
  set collection(col: Client[]) {
    this._collection = col;
  }

  // get item in collection by id

  // update

  public update(item: Client, state: State) {
    item.state = state;
  }
}
