import './CommentList.scss'
import Comment from '../Comment/Comment';
import BaseButton from '../../Buttons/BaseButton/BaseButton';
import CommentIcon from '../../../assets/icons/add_comment.svg';
import MohanMuruge from '../../../assets/images/Mohan-muruge.jpg';

function CommentList(props) {
    const { comments } = props;

    return (
        <div className='comment-list'>
            <h3 className='comment-list__title'>{comments.length} Comments</h3>

            <form className='comment-list__form' action="">
                <h3 className='comment-list__form-title'>JOIN THE CONVERSATION</h3>
                <div className='comment-list__add-comment'>
                    <img className='comment-list__image' src={MohanMuruge} alt="" />
                    <div className='comment-list__input-wrapper'>
                        <textarea className='comment-list__input' type="text" 
                            placeholder='Add a new comment' />
                        <BaseButton buttonIcon={CommentIcon} buttonText='COMMENT' />
                    </div>
                </div>

            </form>

            <hr className='comment-list__divider' />
            {comments.map((comment) => {
                return (                 
                    <Comment key={comment.id} comment={comment} />
                )
            })}
        </div>
    );
}

export default CommentList;