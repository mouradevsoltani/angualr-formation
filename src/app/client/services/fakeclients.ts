import { State } from '../../shared/enums/state.enum';
import { Client } from '../../shared/models/client';

export const fakeClients: Client[] = [
  new Client({
    id: 'c1',
    name: 'mourad',
    email: 'smourad@gmail.com',
    contact: 'Maisons-laffite',
    tel: '0610537138',
    state: State.CONFIRME
  }),
  new Client({
    id: 'c2',
    name: 'Christophe',
    email: 'christophe@gmail.com',
    contact: 'Paris',
    tel: '0612345678',
    state: State.OPTION
  }),

];

