import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.info("Get some awesome sales tips and results!", {
    position: toast.POSITION.TOP_LEFT,
    className: 'toaster',
    hideProgressBar: true
});

const Homepage = () => {
    return (
        <div>
            <Link to="/results">
                <button id="enter-button">Enter</button>
            </Link>
            <ToastContainer />
        </div>
        // Could of set up an onclick to push to history path instead of using Link
        // to avoid warning caused by actual DOM and Virtual DOM difference
    )
}
export default Homepage;
