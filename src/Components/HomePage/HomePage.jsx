import React from 'react'
import { Link } from 'react-router-dom'
import TopNav from '../common/TopNav.jsx'

const HomePage = () => {

    return (

        <div>
            <TopNav />
            <div className="flex justify-center items-center">
                <h2>My Portfolio</h2>
                <a>This is my Website</a>
            </div>
        </div>
    );
}

export default HomePage;