import './Comment.scss';
import DeleteSVG from '../../../assets/images/delete-alt.png';
import defaultIcon from '../../../assets/icons/scrub.svg';
import { DateTimeUtils } from '../../../utils';

function Comment({ commentData, handleDeleteClick }) {
    const { id, name, timestamp, comment, likes, image } = commentData;

    const handleClick = () => {
        if (!handleDeleteClick) return;
        handleDeleteClick(id);
    }

    return (
        <>
            <div id={id} className='comment'>
                <div>
                    {/* if the image is null/undefined then it will load defaultIcon */}
                    {(image === null || image === undefined) && <img className='comment__image' src={defaultIcon} alt="profile picture" />}
                    {/* if the image is NOT null/undefined then it will load the passed image */}
                    {image !== null && image !== undefined && <img className='comment__image' src={image} alt="profile picture" />}
                </div>
                <div className='comment__info'>
                    <div className='comment__info-top'>
                        <h4 className='comment__name'>{name}</h4>
                        <p className='comment__timestamp'>{DateTimeUtils.getShortDateFromTimestamp(timestamp)}</p>
                    </div>
                    <p className='comment__comment'>{comment}</p>
                </div>
            </div>
            <div className="comment__delete">
                <img className="comment__delete-icon" src={DeleteSVG} onClick={handleClick}
                    alt="click to delete this comment" />
            </div>
            <hr className='comment-list__divider' />
        </>

    );
}

export default Comment;