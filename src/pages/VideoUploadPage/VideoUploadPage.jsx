import './VideoUploadPage.scss';
import PublishButton from '../../components/Buttons/BaseButton/BaseButton';
import PublishButtonSVG from '../../assets/icons/publish.svg';


function VideoUploadPage() {
    return (
        <div className='video-upload'>
            <hr className='video-upload__divider' />
            <h1 className='video-upload__header'>Upload Video</h1>
            <h2 className='video-upload__subheader'>VIDEO THUMBNAIL</h2>
            <img className='video-thumbnail__image' src='' alt="Video Thumbnail" />
            <h2 className='video-upload__subheader'>TITLE YOUR VIDEO</h2>
            <textarea className='video-title__input'
                type='text' placeholder='Add a title to your video'></textarea>
            <h2 className='video-upload__subheader'>ADD A VIDEO DESCRIPTION</h2>
            <textarea className='video-description__input'
                type='text' placeholder='Add a description to your video'></textarea>
                {/* need to add buttonIcon={PublishSvgIcon} buttonText='Upload' */}
            <PublishButton className='publish-button' />
        </div>
    )
}

export default VideoUploadPage;