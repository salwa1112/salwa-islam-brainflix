import './VideoPlayer.scss';

import React, { useState } from 'react';

function VideoPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div>
            <video className='player'controls >
                <source src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4" type="video/mp4" />
            </video>
        </div>
    )
}
export default VideoPlayer;