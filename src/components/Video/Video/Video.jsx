import './Video.scss'

function Video(props) {
    const { id, title, channel, image } = props.videos;


    function handleClick() {
        //console.log(id);
        props.handleVideoClick({ id, title, channel, image });
    }

    return (
        <div onClick={handleClick} id={id} className='video'>
            <img className='video__thumbnail' src={image} alt="" />
            <div className='video__info'>
                <h3 className='video__title'>{title}</h3>
                <h6 className='video__channel'>{channel}</h6>
            </div>
        </div>
    )
}

export default Video;