import React from 'react';
import './App.css';
import images from './data/data.js';
// import ImageItem from './image-list/ImageItem';
import ImageList from './image-list/ImageList';
import Header from './header/Header.js';


export default class App extends React.Component {

  render() {

    return (
      <>
        <Header />
        <ImageList images={images} />
      </>
    )
  }
}
