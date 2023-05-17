import './VideoPlayer.scss'
import { useRef, useState } from 'react';
import PlayButonIcon from '../../../assets/icons/play.svg';
import PauseButtonIcon from '../../../assets/icons/pause.svg';
import VolumeUpIcon from '../../../assets/icons/volume_up.svg';
import FullScreenIcon from '../../../assets/icons/fullscreen.svg';

function VideoPlayer(props) {
    const [buttonIcon, setButtonIcon] = useState(PlayButonIcon);
    //const [posterImage, setPosterImage] = useState('https://i.imgur.com/l2Xfgpl.jpg')
    const [isPlaying, setIsPlaying] = useState(false);
    const {image} = props.video;

    //Axios call from

    const mediaPlayer = useRef(null);

    function playVideo() {
        if (isPlaying) {
            mediaPlayer.current.pause();
            setButtonIcon(PlayButonIcon);
            setIsPlaying(false);
        } else {
            mediaPlayer.current.play();
            setIsPlaying(true);
            setButtonIcon(PauseButtonIcon);
        }

    }


    function handleVideoEnded() {
        console.log('Ended');
        setButtonIcon(PlayButonIcon);
        setIsPlaying(false);
        mediaPlayer.current.load();
    }

    return (
        <div className='video-wrapper'>
            <video poster={image !== undefined ? image : ''} onEnded={handleVideoEnded} className={"video-player"}
                ref={mediaPlayer}
                src={props.src} />

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