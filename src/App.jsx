import './App.scss';
import './styles/brainflix.scss';
import BrainFlixHeader from './components/Header/Header';
import VideoList from './components/Video/VideoList/VideoList';
import MainVideo from './components/MainVideo/MainVideo';
import videos from '../src/data/videos.json';
import videoDetails from '../src/data/video-details.json';
import { useState } from 'react';


function App() {
  const [videoList, setVideoList] = useState(videos);
  const [clickedVideoDetail, setClickedVideoDetail] = useState(videoDetails[0]);

  function onVideoListClicked(clickedVideo) {
    setClickedVideoDetail(videoDetails.filter(v => v.id === clickedVideo.id)[0]);
  }


  //To send info to main video, we need click from each video to load the main video
  return (
    <div className="App">
      <BrainFlixHeader />

      <MainVideo videoDetail={clickedVideoDetail} />

      <VideoList videoList={videoList} handleListClick={onVideoListClicked} />
    </div>
  );
}

export default App;
