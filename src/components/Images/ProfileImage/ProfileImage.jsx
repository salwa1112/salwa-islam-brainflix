import './ProfileImage.scss';

function ProfileImage(props) {
    return(
        <img className={'profile-image ' + props.className ?? ''} src={props.ProfileImage} alt="" />
    );
}

export default ProfileImage;