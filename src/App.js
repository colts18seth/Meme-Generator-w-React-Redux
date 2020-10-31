import Header from './Header';
import MemeForm from './MemeForm';
import { useSelector } from "react-redux";
import FinishedMeme from './FinishedMeme';
import './App.css';

function App() {
    const memes = useSelector(state => state);
    return (
        <div className="App">
            <Header />
            <MemeForm />
            {memes && memes.finishedMemes.slice(0).reverse().map(meme => <FinishedMeme meme={meme} key={meme.key} />)}
        </div>
    );
}

export default App;
