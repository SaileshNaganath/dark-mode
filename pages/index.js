import Head from 'next/head';
import styles from '../styles/Home.module.css';

import React, { useState, useEffect } from "react";
import {ThemeProvider} from "styled-components";
import  {useDarkMode} from "../components/useDarkMode"
import { GlobalStyles } from "../components/Globalstyle";
import { lightTheme, darkTheme } from "../components/Themes"
import Toggle from "../components/Toggler"

import dummyData from "../data/data";
import CardList from "../components/CardList";

const Home= () => {

  
  const [videos, setVideos] = useState([]);
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideos(dummyData);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if(!mountedComponent) return <div/>

  return (
   
    <ThemeProvider theme={themeMode}>
      <>
      <Head>
    <title>Dark Theme Preview</title>
  </Head>
      <GlobalStyles/>
        <div className={styles.App}>
          <Toggle theme={theme} toggleTheme={themeToggler} />
          {
            videos.map((list, index) => {
              return (
                <section key={index}>
                  <h2 className={styles.sectionTitle}>{list.section}</h2>
                  <CardList list={list} />
                  <hr />
                </section>
              );
            })}
        </div>
      </>
    </ThemeProvider>
    
  );
};

export default Home;
