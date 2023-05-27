import './Comment.scss'
import defaultIcon from '../../../assets/icons/scrub.svg';
import moment from 'moment/moment';

function Comment(props) {
    const { id, name, timestamp, comment, image } = props.comment;

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
                        <p className='comment__timestamp'>{moment(timestamp).format('DD/MM/yyyy')}</p>
                    </div>
                    <p className='comment__comment'>{comment}</p>
                </div>
            </div>
            <hr className='comment-list__divider' />
        </>

    );
}

export default Comment;