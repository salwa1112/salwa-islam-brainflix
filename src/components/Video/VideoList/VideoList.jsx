import './VideoList.scss'
import VideoThumbnail from '../Video/Video';

function VideoList() {

    const videoList = [
        {
            "id": "84e96018-4022-434e-80bf-000ce4cd12b8",
            "title": "BMX Rampage: 2021 Highlights",
            "channel": "Red Cow",
            "image": "https://i.imgur.com/l2Xfgpl.jpg"
        },
        {
            "id": "c05b9a93-8682-4ab6-aff2-92ebb4bbfc14",
            "title": "Become A Travel Pro In One Easy Lesson",
            "channel": "Todd Welch",
            "image": "https://i.imgur.com/5qyCZrD.jpg"
        }
    ]

    return (
        <div className='video-list'>
            {
                videoList.map(video => {
                    return <VideoThumbnail key={video.id} videos={video}  />;
                })
            }
        </div>
    );
}


export default VideoList;