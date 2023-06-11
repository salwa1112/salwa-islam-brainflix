import './MainVideoInfo.scss'
import ViewsIcon from '../../../assets/icons/views.svg';
import LikeIcon from '../../../assets/icons/likes.svg';
import { DateTimeUtils } from '../../../utils';

function MainVideoInfo(props) {
    const { title, channel, timestamp, views, likes, description } = props.videoinfo;

    return (
        <div className='player-video'> {/*Block of JSX*/}
            <h1 className='player-video__title'>{title}</h1>
            <hr className='player-video__divider player-video__divider--top' />

            <div className='player-video__subheader'>
                <div className='player-video__channel-info'>
                    <h3 className='player-video__channel'>By {channel}</h3>
                    <p className='player-video__date'>{DateTimeUtils.getShortDateFromTimestamp(timestamp)}</p>
                </div>
                <div className='player-video__stats'>
                    <div className='player-video__views'>
                        <img className='player-video__view-icon' src={ViewsIcon} alt="Icon for Views" />
                        <p className='player-video__count'>{views}</p>
                    </div>

                    <div className='player-video__likes'>
                        <img className='player-video__like-icon' src={LikeIcon} alt="Icon for Likes" />
                        <p className='player-video__count'>{likes}</p>
                    </div>
                </div>
            </div>
            <hr className='player-video__divider player-video__divider--bottom' />
            <p className='player-video__description'>{description}</p>
        </div>
    )
}

export default MainVideoInfo;