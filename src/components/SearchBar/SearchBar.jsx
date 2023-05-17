import './SearchBar.scss';
import SearchIcon from '../../assets/icons/search.svg';

function SearchBar(props){
    const {className, placeHolderText} = props;
    return (
        <div className={'search ' + (className ?? '')}>
            <img className='search__icon' src={SearchIcon} alt=""/>
            <input className='search__input' type="text" placeholder={placeHolderText}/>
        </div>
    );
}

export default SearchBar;