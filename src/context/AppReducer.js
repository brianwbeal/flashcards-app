// reducer handles changes to app-level state
export default (state, action) => {
    switch(action.type) {

        // GET_CARDS
        case 'GET_CARDS':
            return {
                ...state,
                cards: action.payload
            }

        // DELETE_CARD
        case 'DELETE_CARD':
            return {
                ...state,
                cards: action.payload
            }

        // CREATE_CARD
        case 'CREATE_CARD':
            return {
                ...state,
                cards: action.payload
            }

        default:
            return state;    
    }
};