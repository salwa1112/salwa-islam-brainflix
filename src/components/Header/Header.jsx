import './Header.scss';
import UploadButton from '../Buttons/BaseButton/BaseButton';
import UploadSvgIcon from '../../assets/icons/upload.svg';
import BrainFlixLogo from '../../assets/logo/BrainFlix-logo.svg';
import ProfileImage from '../Images/ProfileImage/ProfileImage';
import MohanMuruge from '../../assets/images/Mohan-muruge.jpg';
import SearchBar from '../SearchBar/SearchBar';

function Header() {
    return (
        <div className='header'>
            <img className='header__logo' src={BrainFlixLogo} alt="" />

            <div className='header__options'>
                <div className='header__search'>
                    <SearchBar className='header__search-bar' placeHolderText='Search' />
                    <ProfileImage className='header__image-mobile' ProfileImage={MohanMuruge} />
                </div>
                <UploadButton className='upload-button' buttonIcon={UploadSvgIcon} buttonText='Upload' />
                <ProfileImage className='header__image-options' ProfileImage={MohanMuruge} />
            </div>

        </div>
    );
}

export default Header;