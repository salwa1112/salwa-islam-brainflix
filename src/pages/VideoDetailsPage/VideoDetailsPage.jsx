import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import './HomePage.scss';
import VideoPlayer from "../../components/Video/VideoPlayer/VideoPlayer";
import MainVideoInfo from "../../components/Video/MainVideoInfo/MainVideoInfo";
import VideoList from "../../components/Video/VideoList/VideoList";
import CommentList from '../../components/Comments/CommentList/CommentList';
import { ApiUtils } from "../../utils";


function VideoDetailsPage({ videos }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [videoInfo, setVideoInfo] = useState(null);

    useEffect(() => {
        ApiUtils.getVideoDetails(id).then((r) => {
            setVideoInfo(r.data);
        })
            .catch((error) => {
                navigate('/not-found');
            });
    }, [id]);

    return (
        <>
            {/* VideoPlayer */}
            <VideoPlayer image={!videoInfo ? '' : videoInfo.image} src={!videoInfo ? '' : videoInfo.video} />

            {/* MainVideo */}
            <div className='main-video'>
                <div className='main-video__social'>
                    {!videoInfo && <div><h2>Loading...</h2></div>}
                    {videoInfo && <MainVideoInfo videoInfo={videoInfo} />}
                    {videoInfo && <CommentList comments={videoInfo.comments} />}
                </div>
                <hr className='main-video__divider' />

                {/* VideoList */}
                <VideoList className={'main-video__video-list'} videos={videos.filter( v => v.id !== id)} />
            </div>
        </>
    )
}

export default VideoDetailsPage;