import React from "react";
import Card from "./Card";
import styles from '../styles/Home.module.css';

const CardList = ({ list }) => {
    return (
      <ul className={styles.list}>
        {list.items.map((item, index) => {
          return <Card key={index} item={item} channel={list.channel} />;
        })}
      </ul>
    );
  };

  export default CardList;