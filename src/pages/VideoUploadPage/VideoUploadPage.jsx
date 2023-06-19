import './VideoUploadPage.scss';
import PublishButton from '../../components/Buttons/BaseButton/BaseButton';
import PublishButtonSVG from '../../assets/icons/publish.svg';
import VideoUploadPreview from '../../assets/images/Upload-video-preview.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from 'react';


function VideoUploadPage() {

    const navigate = useNavigate();
    const notify = () => toast("Video Upload Successfully! Returning back to homepage.");
    const formRef = useRef(null);

    const gotoHomePage = () => {
        //display a toast message after chick the publish button
        notify();
        setTimeout(() => {
            navigate('/');
        }, 2000);
    }

    const handleSubmit = () => {
        // clear the input fields upon submit form
        const form = formRef.current;
        form.reset();
        gotoHomePage();
    }

    return (
        <div className='video-upload'>
            <hr className='video-upload__divider' />
            <h1 className='video-upload__header'>Upload Video</h1>
            <hr className='video-upload__divider video-upload__divider--tablet' />
            <form ref={formRef} className='video-upload__form'>
                <div className='video-upload__info'>
                    <div className='video-upload__thumbnail'>
                        <h2 className='video-upload__label'>VIDEO THUMBNAIL</h2>
                        <img className='video-upload__image' src={VideoUploadPreview} alt="Video Thumbnail" />
                    </div>
                    <div className='video-upload__details'>
                        <div className='video-upload__input-wrapper'>
                            <h2 className='video-upload__label'>TITLE YOUR VIDEO</h2>
                            <input className='video-upload__input video-upload__input--title'
                                type='text' placeholder='Add a title to your video'></input>

                        </div>
                        <div className='video-upload__input-wrapper'>
                            <h2 className='video-upload__label'>ADD A VIDEO DESCRIPTION</h2>
                            <textarea className='video-upload__input video-upload__input--description'
                                type='text' placeholder='Add a description to your video'>
                            </textarea>
                        </div>
                    </div>
                </div>
                <hr className='video-upload__divider video-upload__divider--desktop' />
                <div className='video-upload__buttons'>
                    <Link to='/' className='video-upload__link video-upload__link--tablet'>CANCEL</Link>
                    <PublishButton className='publish-button' buttonText={'Publish'}
                        handleClick={handleSubmit} buttonIcon={PublishButtonSVG} />
                    <Link to='/' className='video-upload__link'>CANCEL</Link>
                </div>
            </form>
            {/* using react toastify library to show a toast message about upload */}
            <ToastContainer
                autoClose={2000} />
        </div>
    )
}

export default VideoUploadPage;