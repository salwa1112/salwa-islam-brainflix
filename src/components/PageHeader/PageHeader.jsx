import './PageHeader.scss';
import UploadButton from '../Buttons/BaseButton/BaseButton';
import UploadSvgIcon from '../../assets/icons/upload.svg';
import BrainFlixLogo from '../../assets/logo/BrainFlix-logo.svg';
import ProfileImage from '../Images/ProfileImage/ProfileImage';
import MohanMuruge from '../../assets/images/Mohan-muruge.jpg';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

function PageHeader() {

    return (
        <div className='header'>
            <Link to='/'>
                <img className='header__logo' src={BrainFlixLogo} alt="Site Logo" />
            </Link>

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

export default PageHeader;