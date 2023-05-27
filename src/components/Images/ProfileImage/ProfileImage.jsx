import './ProfileImage.scss';

function ProfileImage(props) {
    return(
        <>
        {(props.className === null || props.className === undefined) && <img className={'profile-image'} src={props.ProfileImage} alt="profile picture" />}
        {props.className !== null && props.className !== undefined && <img className={'profile-image ' + props.className} src={props.ProfileImage} alt="profile picture" />} 
        </>
    );
}

export default ProfileImage;