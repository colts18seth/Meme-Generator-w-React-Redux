
import { useDispatch } from "react-redux";
import './FinishedMeme.css';

function FinishedMeme({ meme }) {
    const dispatch = useDispatch();

    const deleteMeme = () => {
        dispatch({ type: "DELETE-MEME", key: meme.key })
    }

    return (
        <div className="FinishedMemeDisplay">
            <div className="FinishedMeme">
                <img src={meme.image} alt={meme.name} />
                <span onClick={deleteMeme} className="delete">X</span>
                <div className="topText">{meme.topText}</div>
                <div className="bottomText">{meme.bottomText}</div>
            </div>
        </div>
    );
}

export default FinishedMeme;
