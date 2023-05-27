import VideoController from '../VideoController/VideoController';
import './VideoPlayer.scss'
import { useRef } from 'react';

function VideoPlayer(props) {
    const mediaPlayer = useRef(null);

    return (
        <div className='video-wrapper'>
            <video className={"video-player"} playsInline poster={props.image !== undefined ? props.image : ''}
                ref={mediaPlayer}
                src={props.src} />

            <VideoController />
        </div>

    );

}
export default VideoPlayer;