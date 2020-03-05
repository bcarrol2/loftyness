import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div>
            <Link to="/results">
                <button id="enter-button">Enter</button>
            </Link>
        </div>
    )
}
export default Homepage;
