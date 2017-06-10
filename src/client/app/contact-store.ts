import {List, Map, Record} from 'immutable';
import {contactReducer} from './reducers/ContactReducer';
import {ContactAction} from './actions/ContactActions';

const ContactRecord  = Record({
    id: undefined,
    name: '',
    star: false
});

export class Contact extends ContactRecord {
  id: number;
  name: string;
  star: boolean;
}

export interface AppState extends List<Contact>{};