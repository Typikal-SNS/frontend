import '../css/Upload.css';

function Upload({profilePic}) {
    return (
        <div className='upload'>
            <img src={profilePic} className='uploadProfile' alt='' />
            <button className='uploadPopupBtn'>지금 이 순간의 당신을 기록하세요!</button>
        </div>  
    );
}

export default Upload;