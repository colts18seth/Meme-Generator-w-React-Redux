const INITIAL_STATE = { memes: {} };

function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD-IMAGE":
            console.log(state.memes)
            console.log(action.name)
            if (Object.values(state.memes).includes(action.name)) {
                return;
            }
            return { ...state, memes: [...state.memes, action.name = { name: action.name }] };

        default:
            return state;
    }
}

export default rootReducer;