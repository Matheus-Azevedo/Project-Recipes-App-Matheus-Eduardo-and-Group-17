import styles from '../styles/components/LoadingCard.module.css';

function LoadingCard() {
  return (
    <div className={ styles.LoadingContainer }>
      <p>Loading...</p>
    </div>
  );
}

export default LoadingCard;
