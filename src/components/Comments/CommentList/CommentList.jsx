import './CommentList.scss'
import Comment from '../Comment/Comment';
import BaseButton from '../../Buttons/BaseButton/BaseButton';
import CommentIcon from '../../../assets/icons/add_comment.svg';
import MohanMuruge from '../../../assets/images/Mohan-muruge.jpg';
import { useRef } from 'react';

function CommentList({ comments, handleCommentSubmit, handleCommentDelete }) {
    const formRef = useRef(null);

    const handleSubmit = () => {
        const form = formRef.current;
        const commentText = form.comment.value;

        if (!commentText) return;

        const newComment = {
            name: 'Salwa',
            comment: commentText
        }

        if (!handleCommentSubmit) return;
        handleCommentSubmit(newComment);
        form.reset();
    }

    const handleDeleteClick = (commentId) => {
        if (!handleCommentDelete) return;
        handleCommentDelete(commentId);
    }

    return (
        <div className='comment-list'>
            <h3 className='comment-list__title'>{comments.length} Comments</h3>
            <form ref={formRef} className='comment-list__form' action="">
                <h3 className='comment-list__form-title'>JOIN THE CONVERSATION</h3>
                <div className='comment-list__add-comment'>
                    <img className='comment-list__image' src={MohanMuruge} alt="profile picture" />
                    <div className='comment-list__input-wrapper'>
                        <textarea name='comment' className='comment-list__input' type="text"
                            placeholder='Add a new comment' />
                        {/* comment button */}
                        <BaseButton handleClick={handleSubmit} className='comment-list__button' buttonIcon={CommentIcon} buttonText='COMMENT' />
                    </div>
                </div>
            </form>
            <hr className='comment-list__divider' />
            {comments.map((comment) => {
                return (
                    <Comment key={comment.id} commentData={comment} handleDeleteClick={handleDeleteClick} />
                )
            })}
        </div>
    );
}

export default CommentList;