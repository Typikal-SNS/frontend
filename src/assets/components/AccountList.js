import '../css/SearchList.css';

function AccountList({profilePic, userId, name}) {
    return (
        <div className='searchResult'>
            <h2>계정</h2>
            <div className='accountResult'>
                <img src={profilePic} className='accountProfile' alt='' />
                <div className='accountInfo'>
                    <h3>{userId}</h3>
                    <p>{name}</p>
                </div>
                <button className='accountFollow'>팔로우</button>
            </div>
        </div>
    );
}

export default AccountList;