import {Car} from "../Components/types";

export enum ActionKind {
    Name = 'NAME'
}

export type Action = {
    type: ActionKind,
    payload: any
}

export const adminReducer = (state: Car, action: Action) : Car => {
    switch (action.type) {
        case ActionKind.Name:
            return {...state, name: action.payload}
        default:
            return state;
    }
}