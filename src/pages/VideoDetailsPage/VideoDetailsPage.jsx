import { useParams } from "react-router-dom";

function VideoDetailsPage() {
    const { id }  = useParams();
    return (
        <div>
            this is video details page {id}
        </div>
    )
}

export default VideoDetailsPage;