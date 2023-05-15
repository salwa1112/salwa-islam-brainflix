import './VideoPlayer.scss'
import { useRef, useState } from 'react';
import PlayButonIcon from '../../../assets/icons/play.svg';
import PauseButtonIcon from '../../../assets/icons/pause.svg';
import VolumeUpIcon from '../../../assets/icons/volume_up.svg';
import FullScreenIcon from '../../../assets/icons/fullscreen.svg';

function VideoPlayer() {
    const [buttonIcon, setButtonIcon] = useState(PlayButonIcon);
    const [posterImage, setPosterImage] = useState('https://i.imgur.com/l2Xfgpl.jpg')
    const [isPlaying, setIsPlaying] = useState(false);

    const video = useRef(null);

    function playVideo() {
        if (isPlaying) {
            video.current.pause();
            setButtonIcon(PlayButonIcon);
            setIsPlaying(false);
        } else {
            video.current.play();
            setIsPlaying(true);
            setButtonIcon(PauseButtonIcon);
        }

    }


    function handleVideoEnded() {
        console.log('Ended')
        setButtonIcon(PlayButonIcon);
        setIsPlaying(false);
        video.current.load();
    }

    return (
        <div className='video-wrapper'>
            <video poster={posterImage} onEnded={handleVideoEnded} className={"video-player"}
                ref={video}
                src={"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"} />

            <div className={'video-controller'}>
                <div onClick={playVideo} className='video-controller__play'>
                    <img className='video-controller__play-icon' src={buttonIcon} alt="" />
                </div>
                <div className='video-controller__seek'>
                    <div className='video-controller__seek-bar' />
                    <div className='video-controller__seek-time'>
                        <p className='video-controller__text'>12:30/30:00</p>
                    </div>
                </div>
                <div className='video-controller__other-controls'>
                    <img className='video-controller__volume-icon' src={FullScreenIcon} alt="" />
                    <img className='video-controller__volume-icon' src={VolumeUpIcon} alt="" />
                </div>
            </div>

        </div>
    );

}
export default VideoPlayer;