import Button from '../button/Button';
import styles from './card.module.css';

const CardComponent = ({ title, text, src, bgStyle, buttonColor }) => {
	const cardStyles = `card ${styles[bgStyle]}`;
	const titleStyles = `title`;
	const textStyles = `text`;
	const buttonStyles = `button ${styles[buttonColor]}`;
	return (
		<article className={cardStyles}>
			<img src={src} alt='' />
			<h2 className={titleStyles}>{title}</h2>
			<p className={textStyles}>{text}</p>
			<Button className={buttonStyles}>Learn More</Button>
		</article>
	);
};
export default CardComponent;
