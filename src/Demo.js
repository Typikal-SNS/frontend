/**컴포넌트 시험용 페이지*/
import './assets/css/Page.css';
import Sidebar from './assets/components/Sidebar.js'
import SearchBox from './assets/components/SearchBox.js';
import SearchList from './assets/components/SearchList.js';
import Upload from './assets/components/Upload.js';
import Post from './assets/components/Post.js';

function Demo() {
  return (
    <div className="app">
      <Sidebar />
      
      <div className='body'>
        <div className='feed'>
          <SearchBox />
          <SearchList />
          <Upload />
          <Post
            profilePic = ""
            userId = "Kahlua Band"
            timeStamp = "1 days ago"
            content = "demo ing..."
            image = 'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000'
          />
          </div>
      </div>
    </div>
  );
}

export default Demo;