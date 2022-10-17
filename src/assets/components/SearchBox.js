import '../css/SearchBox.css';
import { MdSearch } from 'react-icons/md';

function SearchBox() {
    return (
        <div className='searchBox'>
            <MdSearch className='searchIcon' />
            <input className='searchInput' type='text' placeholder='검색하기' />
            <button type='submit' hidden='hidden' />
        </div>
    );
}

export default SearchBox;