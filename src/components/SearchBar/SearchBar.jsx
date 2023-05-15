import SearchIcon from '../../assets/icons/search.svg';
import './SearchBar.scss';

function SearchBar (props) {
const {placeHolderText} = props;

  return (
    <div className="search">
      <img className='search__icon' src={SearchIcon} alt="" />
      <input className='search__input'
        type="text"
        placeholder={placeHolderText}
        name="search" />
    </div>
  );
}

export default SearchBar;