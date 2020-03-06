import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div>
            <Link to="/results">
                <button id="enter-button">Enter</button>
            </Link>
        </div>
        // Could of set up an onclick to push to history path instead of using Link
        // to avoid warning caused by actual DOM and Virtual DOM difference
    )
}
export default Homepage;
