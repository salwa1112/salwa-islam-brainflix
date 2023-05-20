import './Comment.scss'
import defaultIcon from '../../../assets/icons/scrub.svg';
import moment from 'moment/moment';

function Comment(props) {
    const { id, name, timestamp, comment, image } = props.comment;

    return (
        <>        
        <div id={id} className='comment'>
            <div>
                {image === null && <img className='comment__image' src={defaultIcon} alt="" />}
                {image === undefined && <img className='comment__image' src={defaultIcon} alt="" />}
                {image !== null && image !== undefined && <img className='comment__image' src={image} alt="" />}
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