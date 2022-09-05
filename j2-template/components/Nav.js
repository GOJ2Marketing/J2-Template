import Link from 'next/link'
import Image from 'next/image';
import navStyles from '../styles/Nav.module.css';

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <div className={navStyles.innerNav}>
                <Image src='/Logo.png' width={70} height={50} />
                <ul>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/about'>About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
