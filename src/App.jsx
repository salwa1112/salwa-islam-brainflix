import './App.scss';
import './styles/brainflix.scss'; //If Global Component Needed
import BrainFlixHeader from './components/Header/Header';
import VideoPlayer from './components/Video/VideoPlayer/VideoPlayer';
import VideoList from './components/Video/VideoList/VideoList';
import { useState } from 'react';


function App() {
  const [currentVideo, setCurrentVideo] = useState(null)

  function onVideoListClicked(video){
    setCurrentVideo(video);
    console.log(video);
  }

  return (
    <div className="App">
      <BrainFlixHeader />
      
      <VideoPlayer video={currentVideo} src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" />
      
      <VideoList handleListClick={onVideoListClicked} />
    </div>
  );
}

export default App;
