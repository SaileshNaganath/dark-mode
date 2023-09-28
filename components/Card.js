import React from "react";
import styles from '../styles/Home.module.css';

const Card = ({ item, channel }) => {
    return (
      <li className={styles.card}>
        <a
          href={`https://www.youtube.com/watch?v=${item.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cardLink}
        >
          <img src={item.image} alt={item.title} className={styles.cardImage} />
          <img src={item.image} alt={item.title} className={styles.channelImage} />
          <h4 className={styles.cardTitle}>{item.title}</h4>
          <p className={styles.cardChannel}>
            <i>{channel}</i>
          </p>
          <div className={styles.cardMetrics}>
            {item.views} &bull; {item.published}
          </div>
        </a>
      </li>
    );
  };

  export default Card;