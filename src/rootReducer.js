const INITIAL_STATE = {
    memeBeingMade: {
        image: null,
        topText: null,
        bottomText: null
    },
    finishedMemes: []
};

function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD-IMAGE":
            console.log("image added");
            state.memeBeingMade.image = action.image;
            return { ...state };
        case "ADD-TOP-TEXT":
            console.log("top added");
            state.memeBeingMade.topText = action.topText;
            return { ...state };
        case "ADD-BOTTOM-TEXT":
            console.log("bottom added");
            state.memeBeingMade.bottomText = action.bottomText;
            return { ...state };
        case "SAVE-MEME":
            console.log("saved");
            state.finishedMemes.push(action.payload);
            return { ...state };
        default:
            return state;
    }
}

export default rootReducer;