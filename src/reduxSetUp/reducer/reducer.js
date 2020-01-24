import { INCREMENTE, DECREMENTE } from '../actions/types.js';
const initState = {
    count: 0
}

const reducer = (state=initState,action) =>{
    switch(action.type){
        case INCREMENTE:
            return { ...state, count: state.count+1 }
        case DECREMENTE: 
            return { ...state, count: state.count-1 }
        default : return state
    }
}

export default reducer;