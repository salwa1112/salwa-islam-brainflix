import './VideoList.scss'
import SideVideo from '../Video/Video';
import { useNavigate } from 'react-router-dom';

function VideoList({ videos }) {
    const navigate = useNavigate();

    function handleVideoListClick(clickedVideo) {
        navigate('/videos/' + clickedVideo.id);
    }

    return (
        // Side Video List
        <div className='video-list'>
            <h2 className='video-list__title'>NEXT VIDEOS</h2>
            {
                videos.map(video => {
                    return <SideVideo key={video.id} videos={video} handleVideoClick={handleVideoListClick} />;
                })
            }
        </div>
    );
}

export default VideoList;