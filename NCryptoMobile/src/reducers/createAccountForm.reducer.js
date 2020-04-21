
import { CREATEPERSONACCOUNT } from '../action/index'

const initialCreateAccountFormState = {
    email: null,
    firstname: null,
    lastname: null,
    isLoading: false,
}

export default function createAccountFormReducer(state = initialCreateAccountFormState, action) {
    switch (action.type) {
            // console.log('reducer: ', {...action.payload})
            case CREATEPERSONACCOUNT:
                return {
                    ...state,
                    ...action.payload,
                    isLoading: true,
                }
        
        // case LOGOUT:
        //     return {
        //         ...initialCreateAccountFormState,
        //     }
        default:
            return state;
    }
}


