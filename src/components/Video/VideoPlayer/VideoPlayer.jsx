import VideoController from '../VideoController/VideoController';
import './VideoPlayer.scss'
import { useRef } from 'react';

function VideoPlayer({ image, src } ) {
    const mediaPlayer = useRef(null);

    return (
        <div className='video-wrapper'>
            <video className={"video-player"} playsInline poster={image !== undefined ? image : ''}
                ref={mediaPlayer}
                src={src} />

            <VideoController />
        </div>

    );

}
export default VideoPlayer;