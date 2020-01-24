import { INCREMENTE, DECREMENTE } from './types.js';

export const increment = () =>{
    return {
        type: INCREMENTE
    }
}
export const decrement = () =>{
    return {
        type: DECREMENTE
    }
}
