import meme1 from "./imgs/meme1.jpg";
import meme2 from "./imgs/meme2.jpg";
import meme3 from "./imgs/meme3.jpg";
import meme4 from "./imgs/meme4.jpg";
import { useSelector, useDispatch } from "react-redux";
import './MemeForm.css';

function MemeForm() {
    const memes = useSelector(state => state.finishedMemes);
    const dispatch = useDispatch();

    const addImage = (e) => {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 500;
        canvas.height = 500;
        ctx.drawImage(e.target, 0, 0, 500, 500);

        dispatch({ type: "ADD-IMAGE", image: e.target.src });
    }

    const addTopText = () => {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        const topTextInput = document.getElementById("topText")
        let topText = topTextInput.value;
        ctx.font = '40px arial';
        ctx.fillText(topText, 10, 50);

        dispatch({ type: "ADD-TOP-TEXT", topText: topText });
    }

    const addBottomText = () => {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        const bottomTextInput = document.getElementById("bottomText")
        let bottomText = bottomTextInput.value;
        ctx.font = '40px arial';
        ctx.fillText(bottomText, 10, 490);

        dispatch({ type: "ADD-BOTTOM-TEXT", bottomText: bottomText });
    }

    const saveMeme = (e) => {
        e.preventDefault();
        const canvas = document.getElementById('canvas');
        const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        dispatch({ type: "SAVE-MEME", payload: image });
        console.log(memes)
    }

    return (
        <div className="MemeForm">
            <div id='imageSelect' className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                    Select Meme Image
                </button>
                <div className="dropdown-menu">
                    <button onClick={addImage} className="dropdown-item">
                        <img id="meme1" src={meme1} alt='meme1' />
                    </button>
                    <button onClick={addImage} className="dropdown-item">
                        <img src={meme2} alt='meme2' />
                    </button>
                    <button onClick={addImage} className="dropdown-item">
                        <img src={meme3} alt='meme3' />
                    </button>
                    <button onClick={addImage} className="dropdown-item">
                        <img src={meme4} alt='meme4' />
                    </button>
                </div>
            </div>
            <form className="mt-3">
                <div className="form-group">
                    <label htmlFor="topText">
                        Top Text:
                    </label>
                    <input onChange={addTopText} className="form-control" id="topText" />
                </div>
                <div className="form-group">
                    <label htmlFor="bottomText">
                        Bottom Text:
                    </label>
                    <input onChange={addBottomText} className="form-control" id="bottomText" />
                </div>
                <button onClick={saveMeme} type="submit" className="btn btn-primary">
                    Save
                </button>
            </form>
            <hr />
            <div id="display">
                <canvas id="canvas">
                </canvas>
            </div>
            <div id="finishedMemes">
                {memes &&
                    memes.map(meme => {
                        return (<div key={meme}>
                            <img src={meme} alt="meme" />
                        </div>)
                    })
                }
            </div>
        </div>
    );
}

export default MemeForm;