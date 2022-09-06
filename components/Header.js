import Image from 'next/image';
import Link from 'next/link';
import headerStyles from '../styles/Header.module.css';

const Header = () => {
    return (
        <div className={headerStyles.container}>
            <div className={headerStyles.content}>
                <div className={headerStyles.headerText}>
                    <h1 className={headerStyles.title}>J2 JamStack Template</h1>
                    <p className={headerStyles.subtitle}>A Perfect Place to Start</p>
                    <Link href='/about'><a className={headerStyles.button}>Learn More</a></Link>
                </div>
                <div className={headerStyles.img}>
                    <Image src='/Hero.png' height='350' width='600'/>
                </div>
            </div>
        </div>
    );
}

export default Header;
