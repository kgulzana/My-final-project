import { SET_QUOTES} from './types'

export function setQuotes(payload) {
    return {
        type: SET_QUOTES,
        payload
    }
}

export const fetchQuotes = () => {
    
}