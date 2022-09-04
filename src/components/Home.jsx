import Logo from '../images/LOGO-021.png'
import { Link } from 'react-router-dom';


const Home = () => {
    return ( 
        <div className='container'>
            <div className='bg'></div>
            <div className='logo'>
                <img src={Logo} alt="logo" />
            </div>
            <div className='frame'>
            </div>
            <nav className='nav-btns'>
                <Link to='/redberry-form/addnote'>ᲩᲐᲜᲐᲬᲔᲠᲘᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ</Link>
                <Link to='/redberry-form/laptoplist'>ᲩᲐᲜᲐᲬᲔᲠᲔᲑᲘᲡ ᲡᲘᲐ</Link>
            </nav>
        </div>
     );
}
 
export default Home;