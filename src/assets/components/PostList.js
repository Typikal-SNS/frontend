import '../css/SearchList.css';
import { MdSearch } from 'react-icons/md';

function PostList({searchWord}) {
    return (
        <div className='searchResult'>
            <h2>게시물</h2>
            <div className='postResult'>
                <MdSearch className='postIcon' />
                <h3>{searchWord}</h3>
            </div>
        </div>
    );
}

export default PostList;