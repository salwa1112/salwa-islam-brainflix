import './styles/brainflix.scss';
import BrainFlixHeader from './components/PageHeader/PageHeader';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import VideoDetailsPage from './pages/VideoDetailsPage/VideoDetailsPage';
import VideoUploadPage from './pages/VideoUploadPage/VideoUploadPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { useEffect, useState } from 'react';
import { ApiUtils } from './utils';



function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    //call video list from api
    ApiUtils.getVideos().then((r) => {
      setVideos(r.data);
      console.log(r.data);
    })
    .catch((error)=>{
      console.log(error);
    });

  }, []);

  //To send info to main video, it needs to be clicked on each video to load the main video
  return (
    <BrowserRouter>
      <div className="App">
        {/* site header component */}
        <BrainFlixHeader />

        <Routes>
          <Route path='/' element={<HomePage videos={videos} />} />
          <Route path='/video/upload' element={<VideoUploadPage />} />
          <Route path='/videos/:id' element={<VideoDetailsPage videos={videos} />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>


      </div>
    </BrowserRouter>
  );
}

export default App;
