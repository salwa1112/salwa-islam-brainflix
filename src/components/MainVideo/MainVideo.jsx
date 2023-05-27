import './MainVideo.scss';
import CommentList from '../Comments/CommentList/CommentList';
import VideoInfo from '../Video/MainVideoInfo/MainVideoInfo';
import VideoPlayer from '../Video/VideoPlayer/VideoPlayer';

function MainVideo(props) {
    // const [currentVideo, setCurrentVideo] = useState(null);
    const { title, channel, timestamp, description, views, likes, image, comments } = props.videoDetail;

    return (
        <>
            <VideoPlayer image={image} src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" />

            <VideoInfo videoinfo={{title, channel, timestamp, description, views, likes}} />

            <CommentList comments={comments} image="https://i.imgur.com/0hi3N4B.jpg" />

        </>
    );
}

export default MainVideo;