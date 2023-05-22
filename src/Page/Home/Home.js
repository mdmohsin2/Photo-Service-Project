import React from 'react';
import Upcoming from '../Upcoming';
import Artist from '../Artist';
import Explore from '../Explore';
import Gallery from '../Gallery';

const Home = () => {
    return (
        <div>
            <Gallery></Gallery>
            <Explore></Explore>
            <Artist></Artist>
            <Upcoming></Upcoming>
        </div>
    );
};

export default Home;