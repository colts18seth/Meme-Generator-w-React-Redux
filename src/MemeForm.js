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
        const display = document.getElementById("display");
        if (display.firstChild) {
            display.removeChild(display.firstChild);
        }
        const img = document.createElement('img');
        img.src = e.target.src;
        display.append(img);

        dispatch({ type: "ADD-IMAGE", image: e.target.src, name: e.target.alt });
    }

    const addTopText = () => {
        const display = document.getElementById("display");
        const topText = document.getElementById("topText");
        const div = document.createElement('div');
        div.innerText = topText.value;
        div.classList.add("topText");
        display.append(div);

        dispatch({ type: "ADD-TOP-TEXT", topText: topText });
    }

    const addBottomText = () => {
        const display = document.getElementById("display");
        const bottomText = document.getElementById("bottomText");
        const div = document.createElement('div');
        div.innerText = bottomText.value;
        div.classList.add("bottomText");
        display.append(div);

        dispatch({ type: "ADD-BOTTOM-TEXT", bottomText: bottomText });
    }

    const saveMeme = (e) => {
        e.preventDefault();
        dispatch({ type: "SAVE-MEME" });
        console.log(memes)
    }

    return (
        <div className="row">
            <div id="displayCol" className="col">
                <div id="display"></div>
            </div>
            <div className="MemeForm col">
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
                        <div className="input-group mb-3">
                            <input className="form-control" id="topText" />
                            <div className="input-group-append">
                                <button onClick={addTopText} className="btn btn-primary" type="button">Add</button>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="bottomText">
                            Bottom Text:
                        </label>
                        <div className="input-group mb-3">
                            <input className="form-control" id="bottomText" />
                            <div className="input-group-append">
                                <button onClick={addBottomText} className="btn btn-primary" type="button">Add</button>
                            </div>
                        </div>
                    </div>
                    <button onClick={saveMeme} type="submit" className="btn btn-primary">
                        Save
                </button>
                </form>

            </div>
        </div>
    );
}

export default MemeForm;