import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css'
import TopBar from './components/TopBar'
import Slide from './components/Slide'
import MovieItem from './components/MovieItem'
import TabMenu from '../../components/TabMenu'
import CityLayer from './components/CityLayer'

class Home extends Component {
  showCityLayer = () => {
    console.log('show city layer');
  }
  
  render() {
    return (
      <div className="home">
        <TopBar city="杭州" showCityLayer={ this.showCityLayer }/>
        <div className="home__slide">
          <div className="home__slideWrap">
            <Slide/>
          </div>
        </div>
        <ul className="home__content">
          <li>
            <MovieItem/>
          </li>
          <li>
            <MovieItem/>
          </li>
          <li>
            <MovieItem/>
          </li>
          <li>
            <MovieItem/>
          </li>
        </ul>
        <TabMenu current='user'/>
        <CityLayer/>
      </div>
    );
  }
}

Home.propTypes = {};

export default Home;
