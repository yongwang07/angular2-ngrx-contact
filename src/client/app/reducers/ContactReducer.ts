import {List} from 'immutable';
import { ContactAction, ActionType } from '../actions/ContactActions';
import {Contact, AppState} from '../contact-store';
import {ActionReducer, Action} from '@ngrx/store';

const initialState: AppState = List<Contact>()

export const contactReducer: ActionReducer<AppState> = 
(state: AppState = initialState , action: ContactAction) => {
    switch (action.type) {
        case ActionType.ADD:
            return state.push(new Contact({
                id: action.id,
                name: action.name,
                star: false
            }));            
        case ActionType.REMOVE:
              return state.delete(state.findIndex((contact) => contact.id === action.id));   
        case ActionType.STAR:
            return state.updateIn([state.findIndex((contact) => contact.id == action.id), 
                    'star'], (star) => !star );
            default:
                return state;
    }
};