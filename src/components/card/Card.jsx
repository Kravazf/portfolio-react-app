import './card.css';

const Card = ({ children, className, onClick }) => (
    <article className={`card ${className}`} onClick={onClick}>
      {children}
    </article>
);

export default Card;
