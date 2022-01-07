import { ActionTypes } from '../constant/action-types'

export const peopleAction = (genData) => {
    console.log('genre action', genData)
    return {
        type: ActionTypes.SETPEOPLELIST,
        payload: genData
    }
}