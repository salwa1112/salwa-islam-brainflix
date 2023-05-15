import './Video.scss'

function Video({ videos }) {
    const { id, title, channel, image } = videos;



    return (
        <div id={id} className='video'>
            <img className='video__thumbnail' src={image} alt="" />
            <div className='video__info'>
                <h3 className='video__title'>{title}</h3>
                <p className='video__channel'>{channel}</p>
            </div>
        </div>
    )
}

export default Video;