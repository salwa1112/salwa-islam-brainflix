import './VideoController.scss'
import PlayButonIcon from '../../../assets/icons/play.svg';
// import PauseButtonIcon from '../../../assets/icons/pause.svg';
import VolumeUpIcon from '../../../assets/icons/volume_up.svg';
import FullScreenIcon from '../../../assets/icons/fullscreen.svg';

function VideoController(props) {
    return (
        <div className={'video-controller'}>
            <div className='video-controller__play'>
                <img className='video-controller__play-icon' src={PlayButonIcon} alt="" />
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
    );
}

export default VideoController;