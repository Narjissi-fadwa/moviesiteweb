import React from 'react';
import Section from './partials/Section';

const Home = ({ name, setName }) => {
    return (
        <div>
            <Section name={name} setName={setName} />
        </div>
    );
};

export default Home;