import { ActionTypes } from '../constant/action-types'

const initalState = {
    people: [],
}

export const peopleReducer = (state= initalState, { type , payload }) => {
    switch(type){
        case ActionTypes.SETPEOPLELIST :
            return {...state, people: payload};
        default :
            return state;
    }
}