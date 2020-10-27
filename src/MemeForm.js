import meme1 from "./imgs/meme1.jpg";
import meme2 from "./imgs/meme2.jpg";
import meme3 from "./imgs/meme3.jpg";
import meme4 from "./imgs/meme4.jpg";
import { useSelector, useDispatch } from "react-redux";
import './MemeForm.css';

function MemeForm() {
    const memes = useSelector(state => state.memes);
    const dispatch = useDispatch();

    const addImage = (e) => {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 500;
        canvas.height = 500;
        ctx.drawImage(e.target, 0, 0, 500, 500);

        dispatch({ type: "ADD-IMAGE", name: e.target.alt, image: e.target.src });
    }
    const addTopText = (e) => {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        ctx.font = '48px serif';
        ctx.fillText('Hello world', 10, 50);
        const topTextInput = document.getElementById("topText")
        let topText = topTextInput.value;
    }

    console.log(memes)

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
                    <input className="form-control" id="topText" />
                </div>
                <div className="form-group">
                    <label htmlFor="bottomText">
                        Bottom Text:
                    </label>
                    <input className="form-control" id="bottomText" />
                </div>
                <button type="submit" className="btn btn-primary">
                    Save
                </button>
            </form>
            <hr />
            <div id="display">
                <canvas id="canvas">
                </canvas>
            </div>
        </div>
    );
}

export default MemeForm;