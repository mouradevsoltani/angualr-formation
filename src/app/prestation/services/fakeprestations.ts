import { State } from '../../shared/enums/state.enum';
import { PrestationInterface } from '../../shared/interfaces/prestation-interface';
import { Prestation } from '../../shared/models/prestation';

export const fakePrestations: Prestation[] = [
  new Prestation({
    id: 'a1',
    type_presta: 'Formation',
    client: 'Modis',
    nb_jours: 2,
    tjm_ht: 500
  }),
  new Prestation({
    id: 'ab',
    type_presta: 'Coaching',
    client: 'Edugroup',
    nb_jours: 3,
    tjm_ht: 700
  }),

];

