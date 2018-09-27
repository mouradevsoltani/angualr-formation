import { ClientInterface } from '../interfaces/client-interface';
import { State } from '../enums/state.enum';

export class Client implements ClientInterface {
  id: string;  name: any;
  string: any;
  email: string;
  tel: string;
  contact: string;
  state = State.OPTION;

  constructor(fields?: Partial<Client>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}

