import './VideoList.scss'
import SideVideo from '../Video/Video';
import { useState } from 'react';

function VideoList(props) {
    const [clickedVideoId, setClickedVideoId] = useState(props.videoList[0].id); //This will be used to highlight the video that is clicked


    function handleVideoListClick(clickedVideo) {
        //Save current clicked video id
        setClickedVideoId(clickedVideo.id);
        //This will run in parent
        props.handleListClick(clickedVideo);
    }

    return (
        // Side Video List
        <div className='video-list'>
            <h2 className='video-list__title'>NEXT VIDEOS</h2>
            {   
                props.videoList.filter(v => v.id !== clickedVideoId).map(video => {
                    return <SideVideo key={video.id} videos={video} handleVideoClick={handleVideoListClick}  />;
                })
            }
        </div>
    );
}

export default VideoList;