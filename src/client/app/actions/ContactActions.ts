import {Action} from '@ngrx/store';

export const ActionType = {
    ADD: 'ADD',
    REMOVE: 'REMVE',
    STAR: 'STAR'
};
export class ContactAction implements Action {
    constructor(public type: string, public id: number, public name?: string){};
}
export class AddContactAction extends ContactAction {
    constructor(public id: number, public name: string) {
        super(ActionType.ADD, id, name);
    }
} 

export class RemoveContactAction extends ContactAction {
    constructor(public id: number){
        super(ActionType.REMOVE, id);
    };
} 

export class StarContactAction extends ContactAction {
    constructor(public id: number){
        super(ActionType.STAR, id);
    }
}