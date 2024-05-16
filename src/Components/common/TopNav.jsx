import {react} from 'react'
import './cssFiles/TopNav.css'
import NavBar from './navBar.jsx'

import { Link } from 'react-router-dom'

const TopNav = () => {

    return (

        <div className="TpNv">
            <div>
                <h1>Farsith Fawzer</h1>
            </div>
            <div>
                <NavBar />
            </div>
            <div>
                <button>Hire Me</button>
            </div>
        </div>

    );
}
export default TopNav;