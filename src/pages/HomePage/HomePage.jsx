import './HomePage.scss'
import VideoPlayer from "../../components/Video/VideoPlayer/VideoPlayer";
import MainVideoInfo from "../../components/Video/MainVideoInfo/MainVideoInfo";
import VideoList from "../../components/Video/VideoList/VideoList";
import CommentList from '../../components/Comments/CommentList/CommentList';
import { useEffect, useState } from "react";
import { ApiUtils } from "../../utils";



function HomePage({ videos }) {
    const [videoInfo, setVideoInfo] = useState(null);

    useEffect(() => {
        //call video info for video id
        const videoId = videos.length > 0 ? videos[0].id : null;

        if (videoId) {
            ApiUtils.getVideoDetails(videoId).then((r) => {
                setVideoInfo(r.data);
            })
                .catch((error) => {
                    console.log(error);
                })
        }
    }, [videos]);

    return (
        <div className="home-page">
            {/* VideoPlayer */}
            <VideoPlayer src="" />

            {/* MainVideo */}
            <div className='main-video'>
                <div className='main-video__social'>
                    {!videoInfo && <div><h2>Loading...</h2></div>}
                    {videoInfo && <MainVideoInfo videoInfo={videoInfo} />}
                    {videoInfo && <CommentList comments={videoInfo.comments} />}
                </div>
                <hr className='main-video__divider' />

                {/* VideoList */}
                <VideoList className={'main-video__video-list'} videos={videos} />
            </div>

        </div>
    )
}

export default HomePage;