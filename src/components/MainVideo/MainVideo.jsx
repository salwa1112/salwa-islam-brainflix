import './MainVideo.scss';
import CommentList from '../Comments/CommentList/CommentList';
import VideoInfo from '../Video/MainVideoInfo/MainVideoInfo';
import VideoPlayer from '../Video/VideoPlayer/VideoPlayer';
import VideoList from '../Video/VideoList/VideoList';
import videoDetails from '../../data/video-details.json';
import videos from '../../data/videos.json';
import defaultIcon from '../../assets/icons/scrub.svg';
import { useState } from 'react';


function MainVideo(props) {
    const [clickedVideoDetail, setClickedVideoDetail] = useState(videoDetails[0]);
    const [videoList, setVideoList] = useState(videos);
    const { title, channel, timestamp, description, views, likes, image, comments } = clickedVideoDetail;

    //filter out the 1st video from the video list
    function onVideoListClicked(clickedVideo) {
        setClickedVideoDetail(videoDetails.filter(v => v.id === clickedVideo.id)[0]);
    }

    return (
        <>
            <VideoPlayer image={image} src="" />
            <div className='main-video'>
                <div className='main-video__social'>
                    <VideoInfo videoinfo={{ title, channel, timestamp, description, views, likes }} />
                    <CommentList comments={comments} image={defaultIcon} />
                </div>
                <hr className='main-video__divider' />
                <VideoList className={'main-video__video-list'} videoList={videoList} handleListClick={onVideoListClicked} />
            </div>
        </>
    );
}

export default MainVideo;