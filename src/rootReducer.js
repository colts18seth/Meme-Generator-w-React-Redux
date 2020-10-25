const INITIAL_STATE = { memes: [] };

function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD-IMAGE":
            return { ...state, memes: [...state.memes, { name: action.name }] };

        default:
            return state;
    }
}

export default rootReducer;