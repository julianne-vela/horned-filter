import React from 'react';
import './components/stylesheets/App.css';
import images from './data/data.js';
import ImageList from './components/ImageList';
import Header from './components/Header.js';
import DropDown from './components/DropDown';

export default class App extends React.Component {
  state = {
    keyword: '',
    horns: 0,
  }

  handleKeywordChange = (e) => {
    this.setState({
      keyword: e.target.value
    })
  }

  handleHornsChange = (e) => {
    this.setState({
      horns: Number(e.target.value)
    })
  }

  render() {
    const { keyword, horns } = this.state;

    const filteredImages = images.filter((image) => {
      if (!keyword && !horns) return true;
      if (keyword && !horns) return (image.keyword === keyword);
      if (!keyword && horns) return (image.horns === horns);
      if (keyword && horns) return (image.keyword === keyword && image.horns === horns);
      return false;
    });

    let uniqueKeywords = Array.from(new Set(images.map(image => {
      Object.keys(image)
      return image.keyword
    })))

    console.log(uniqueKeywords);

    return (
      <>
        <Header />
        <DropDown currentValue={this.state.keyword}
          handleChange={this.handleKeywordChange}
          options={uniqueKeywords}
        />
        < DropDown />
        <ImageList filteredImages={filteredImages} />
      </>
    )
  }
}
