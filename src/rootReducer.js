const INITIAL_STATE = {
    memeBeingMade: {
        key: null,
        name: null,
        image: null,
        topText: null,
        bottomText: null
    },
    finishedMemes: []
};

function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD-IMAGE":
            state.memeBeingMade.name = action.name;
            state.memeBeingMade.key = action.key;
            state.memeBeingMade.image = action.image;
            return { ...state };
        case "ADD-TOP-TEXT":
            state.memeBeingMade.topText = action.topText;
            return { ...state };
        case "ADD-BOTTOM-TEXT":
            state.memeBeingMade.bottomText = action.bottomText;
            return { ...state };
        case "SAVE-MEME":
            state.finishedMemes.push({ name: state.memeBeingMade.name, key: state.memeBeingMade.key, image: state.memeBeingMade.image, topText: state.memeBeingMade.topText, bottomText: state.memeBeingMade.bottomText });
            return { ...state };
        case "DELETE-MEME":
            state.finishedMemes = state.finishedMemes.filter(memes => memes.key !== action.key)
            return { ...state };
        case "RESET":
            state.memeBeingMade = {
                name: null,
                image: null,
                topText: null,
                bottomText: null
            }
            return { ...state };
        default:
            return state;
    }
}

export default rootReducer;