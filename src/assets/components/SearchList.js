import '../css/SearchList.css';
import AccountList from './AccountList';
import PostList from './PostList';

function SearchList() {
    return (
        <div className='searchList'>
            <AccountList
                profilePic = ''
                userId = 'Kahlua Band'
                name = '컴퓨터공학과 밴드 깔루아'
            />
            <PostList
                searchWord='깔루아'
            />
        </div>
    );
}

export default SearchList;