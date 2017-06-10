import {Observable} from 'rxjs/Rx';
import {Action, ActionReducer, StoreModule, State, Store} from '@ngrx/store';
import {Map, fromJS, List} from "immutable";

const ActionType = {
  ADDMSSAGE: 'ADDMESSAGE',
  DELETEMESSAGE: 'DELETEMESSAGE'
}

interface AppState {
    messages: string[];
}

class AddMessageAction implements Action {
    type = ActionType.ADDMSSAGE;
    constructor(public message: string){};
}

class DeleteMessageAction implements Action {
  type = ActionType.DELETEMESSAGE;
  constructor(public index: number){};
}

class MessageActions {
    static addMessage(message: string): AddMessageAction {
        return new AddMessageAction(message);
    }
    static deleteMessage(index: number): DeleteMessageAction {
        return new DeleteMessageAction(index);
    }
}

let initialState: AppState = {messages: []};

let reducer: ActionReducer<AppState> = (state: AppState = initialState, action: Action): AppState => {
    switch(action.type) {
        case ActionType.ADDMSSAGE:
            return {
                messages: state.messages.concat((<AddMessageAction>action).message)
            };
        case ActionType.DELETEMESSAGE:
            const idx = (<DeleteMessageAction>action).index;
            return {
                messages: [...state.messages.slice(0, idx),
                ...state.messages.slice(idx + 1, state.messages.length)
                ]
            };
        default:
            return state;
    }
};


// create a new store
//let store = createStore<AppState>(reducer);

StoreModule.provideStore(reducer),
const stat = 
console.log(store.getState()); // -> { messages: [] }

store.dispatch(MessageActions
                .addMessage('Would you say the fringe was made of silk?'));

store.dispatch(MessageActions
                .addMessage('Wouldnt have no other kind but silk'));

store.dispatch(MessageActions
                .addMessage('Has it really got a team of snow white horses?'));

console.log(store.getState());
// -> 
// { messages:
//    [ 'Would you say the fringe was made of silk?',
//      'Wouldnt have no other kind but silk',
//      'Has it really got a team of snow white horses?' ] }

store.dispatch(MessageActions.deleteMessage(1));
console.log(store.getState());
// -> 
// { messages:
//    [ 'Would you say the fringe was made of silk?',
//      'Has it really got a team of snow white horses?' ] }

store.dispatch(MessageActions.deleteMessage(0));
console.log(store.getState());
// ->
// { messages: [ 'Has it really got a team of snow white horses?' ] }