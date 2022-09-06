import cardStyles from '../styles/Card.module.css';
import Image from 'next/image';

const Card = (props) => {
    return (
        <div className={cardStyles.container}>
            <div className={cardStyles.content}>
                    <Image src={props.image} height='200' width='150'/>
                    <div className={cardStyles.title}>{props.title}</div>
            </div>
        </div>
    );
}

export default Card;
