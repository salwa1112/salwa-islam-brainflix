import './ProfileImage.scss';

function ProfileImage(props) {

    const {className} = props;

    return (
        <img className={'profile-image' + (className !== undefined ? ` ${className}` : '')} src= {props.ProfileImage} alt='' />
    );
}

export default ProfileImage;