import 'src/assets/css/Sidebar.css';
import logo from 'src/assets/typikalLogo.svg';
import { MdHome, MdSearch, MdPerson, MdNotifications, MdPending } from 'react-icons/md'
/** 설치 : npm install react-icons --save
    참고 : https://react-icons.github.io/react-icons
*/

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sideTop'>
                <img src={logo} alt='logo' />
                <h1>TYPIKLAL</h1>
            </div>

            <div className='sideBottom'>
                <div className='sideOpt'>
                    <MdHome className='sideIcon' />
                    <h2>홈</h2>
                </div>
                <div className='sideOpt'>
                    <MdSearch className='sideIcon' />
                    <h2>검색하기</h2>
                </div>
                <div className='sideOpt'>
                    <MdPerson className='sideIcon' />
                    <h2>프로필</h2>
                </div>
                <div className='sideOpt'>
                    <MdNotifications className='sideIcon' />
                    <h2>알림</h2>
                </div>
                <div className='sideOpt'>
                    <MdPending className='sideIcon' />
                    <h2>더 보기</h2>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;