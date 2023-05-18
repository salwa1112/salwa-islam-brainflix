import './VideoInfo.scss';
import ViewsIcon from '../../../assets/icons/views.svg';
import LikeIcon from '../../../assets/icons/likes.svg';


function VideoInfo() {


    return (
        <div className='player-video'>
            <h1 className='player-video__title'>BMX Rampage: 2021 Highlights</h1>
            <hr className='player-video__divider' />

            <div className='player-video__subheader'>
                <div className='player-video__channel__date'>
                    <h3 className='player-video__channel'>By Red Crow</h3>
                    <p className='player-video__date'>07/11/2021</p>
                </div>
                <div className='player-video__icons'>
                    <div className='player-video__views'>
                        <img className='player-video__views-icon' src={ViewsIcon} alt="" />
                        <p player-video__views__count>1,01,123</p>
                    </div>

                    <div className='player-video__like'>
                        <img className='player-video__like-icon' src={LikeIcon} alt="" />
                        <p className='player-video__like__count'>110,985</p>
                    </div>
                </div>

            </div>
            <hr className='player-video__divider' />

            <p className='player-video__description'>On a gusty day in Southern Utah,
                a group of 25 daring mountain bikers blew the doors off what is possible on two wheels,
                unleashing some of the biggest moments the sport has ever seen. While mother nature only
                allowed for one full run before the conditions made it impossible to ride, that was all
                that was needed for event veteran Kyle Strait, who won the event for the second
                time -- eight years after his first Red Cow Rampage title</p>
        </div>
    )
}


export default VideoInfo;