import './Header.scss';
import BrainFlixLogo from '../../assets/logo/BrainFlix-logo.svg';
import UploadButton from '../Buttons/BaseButton/BaseButton';
import UploadSvgIcon from '../../assets/icons/upload.svg';
import SearchBar from '../SearchBar/SearchBar';
import ProfileImage from '../ProfileImage/ProfileImage';
import StaticProfileImage from '../../assets/images/Mohan-muruge.jpg';

function Header() {

    return (
        <header className='header'>
            {/* logo */}
            <img className='header__logo' src={BrainFlixLogo} alt="" />

            <div className='header__search'>

                {/* search bar */}
                <SearchBar className='header__search-bar' placeHolderText='Search'/>

                {/* profile picture */}
                <ProfileImage ProfileImage={StaticProfileImage} />
            </div>

            {/* upload button */}
            <UploadButton className={'upload-button'} buttonIcon={UploadSvgIcon} buttonText={'Upload'} />
        </header>
    );
}


export default Header;