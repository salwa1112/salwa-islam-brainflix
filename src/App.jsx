import './App.scss';
import './styles/brainflix.scss';
import BrainFlixHeader from './components/Header/Header';
import MainVideo from './components/MainVideo/MainVideo';



function App() {

  //To send info to main video, it needs to be clicked on each video to load the main video
  return (
    <div className="App">
      <BrainFlixHeader />

      <MainVideo />

    </div>
  );
}

export default App;
