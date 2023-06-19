import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import VideoPlayer from "../../components/Video/VideoPlayer/VideoPlayer";
import MainVideoInfo from "../../components/Video/MainVideoInfo/MainVideoInfo";
import VideoList from "../../components/Video/VideoList/VideoList";
import CommentList from '../../components/Comments/CommentList/CommentList';
import { ApiUtils } from "../../utils";


function VideoDetailsPage({ videos }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [videoInfo, setVideoInfo] = useState(null);
    const [commentsData, setCommentsData] = useState(null);

    useEffect(() => {
        ApiUtils.getVideoDetails(id).then((r) => {
            setVideoInfo(r.data);
            setCommentsData(r.data.comments);
        })
            .catch((error) => {
                navigate('/not-found');
            });
    }, [id]);

    const handleCommentSubmit = (newComment) => {
        ApiUtils.postComment(id, newComment)
            .then((response) => {
                const comment = response.data;
                const newCommentsData = [...commentsData, comment];

                setCommentsData(newCommentsData);
            }).catch((error) => {
                //Show error to the user
            });
    }

    const handleCommentDelete = (commentId) => {
        ApiUtils.deleteComment(id, commentId)
        .then((response) => {
            console.log(response.data);
            const updatedComments = commentsData.filter(cd => cd.id !== commentId);
            setCommentsData(updatedComments);
        }).catch((error) => {
            //Show error to the user
        })
    }

    return (
        <>
            {/* VideoPlayer */}
            <VideoPlayer image={!videoInfo ? '' : videoInfo.image} src={!videoInfo ? '' : videoInfo.video} />

            {/* MainVideo */}
            <div className='main-video'>
                <div className='main-video__social'>
                    {!videoInfo && <div><h2>Loading...</h2></div>}
                    {videoInfo && <MainVideoInfo videoInfo={videoInfo} />}
                    {videoInfo && 
                        <CommentList 
                            handleCommentSubmit={handleCommentSubmit}
                            handleCommentDelete={handleCommentDelete} 
                            comments={commentsData}
                        />}
                </div>
                <hr className='main-video__divider' />

                {/* VideoList */}
                <VideoList className={'main-video__video-list'} videos={videos.filter(v => v.id !== id)} />
            </div>
        </>
    )
}

export default VideoDetailsPage;