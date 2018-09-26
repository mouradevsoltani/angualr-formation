import { Injectable } from '@angular/core';
import { Prestation } from '../../shared/models/prestation';
import { fakePrestations } from './fakeprestations';
import { State } from '../../shared/enums/state.enum';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  private _collection: Prestation[];

  constructor() {
    this._collection = fakePrestations;
  }

  // get collection
  get collection(): Prestation[] {
    return this._collection;
  }

  // set collection
  set collection(col: Prestation[]) {
    this._collection = col;
  }

  // get item in collection by id

  // update

  public update(item: Prestation, state: State) {
    item.state = state;
  }

  // delete
}
