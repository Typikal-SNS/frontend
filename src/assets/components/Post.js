import '../css/Post.css';
import { MdMoreHoriz, MdThumbUp, MdChatBubbleOutline } from 'react-icons/md';

function Post({profilePic,userId,timestamp,content,image}) {
    return (
        <div className='post'>
            <div className='postTop'>
                <img src={profilePic} className='postProfile' alt='' />
                <div className='postInfo'>
                    <h3>{userId}</h3>
                    <p>{timestamp}</p>
                </div>
                <div className='postMenu'>
                    <MdMoreHoriz />
                </div>
            </div>

            <div className='postContent'>
                <p>{content}</p>
                <img src={image} className='postImage' alt='' />
            </div>
            
            <div className='postBottom'>
                <div className='postOpt'>
                    <MdThumbUp />
                </div>
                <div className='postOpt'>
                    <MdChatBubbleOutline />
                </div>
            </div>
        </div>
    );
}

export default Post;