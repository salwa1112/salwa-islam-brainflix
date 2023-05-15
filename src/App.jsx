import './App.scss';
import './styles/brainflix.scss'; //If Global Component Needed
import Header from './components/Header/Header';
import VideoPlayer from './components/Video/VideoPlayer/VideoPlayer';
import VideoList from './components/Video/VideoList/VideoList';

function App() {
  return (
    <div className="App">
     <Header />
     <VideoPlayer />
     <VideoList />
    </div>
  );
}

export default App;
