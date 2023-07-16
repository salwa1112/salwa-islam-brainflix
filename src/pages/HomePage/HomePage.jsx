import './HomePage.scss';
import VideoPlayer from "../../components/Video/VideoPlayer/VideoPlayer";
import MainVideoInfo from "../../components/Video/MainVideoInfo/MainVideoInfo";
import VideoList from "../../components/Video/VideoList/VideoList";
import CommentList from '../../components/Comments/CommentList/CommentList';
import { useEffect, useState } from "react";
import { ApiUtils } from "../../utils";



function HomePage({ videos }) {
    const [videoInfo, setVideoInfo] = useState(null);
    const [videoId, setVideoId] = useState(null);
    const [commentsData, setCommentsData] = useState([]);

    useEffect(() => {
        const videoId = videos.length > 0 ? videos[0].id : null;
        setVideoId(videoId);

        if (videoId) {
            ApiUtils.getVideoDetails(videoId).then((r) => {
                setVideoInfo(r.data);
                setCommentsData(r.data.comments);
            })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [videos]);

    const handleCommentSubmit = (newComment) => {

        ApiUtils.postComment(videoId, newComment)
            .then((response) => {
                const comment = response.data;
                const newCommentsData = [...commentsData, comment];

                setCommentsData(newCommentsData);
            }).catch((error) => {
                //Show error to the user
                console.log(error);
            });
    }

    const handleCommentDelete = (commentId) => {
        ApiUtils.deleteComment(videoId, commentId)
        .then((response) => {
            console.log(response.data);
            const updatedComments = commentsData.filter(cd => cd.id !== commentId);
            setCommentsData(updatedComments);
        }).catch((error) => {
            console.log(error);
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
                        />
                    }
                </div>
                <hr className='main-video__divider' />

                {/* VideoList */}
                <VideoList className={'main-video__video-list'} videos={videos.filter(v => v.id !== videoId)} />
            </div>

        </>
    )
}

export default HomePage;