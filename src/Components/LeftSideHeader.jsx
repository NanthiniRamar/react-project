import React from "react"
import "../css/header.css"
import Icon from "../Constants/Icon"
import { Link, useLocation } from "react-router-dom";


const LeftSideHeader = () => {
    const location = useLocation()

    

    return(
        <>
            <div className={`header ${location.pathname ? 'active' : ''}`}>
                <div className="wrapper">
                    <nav>
                        <ul>
                            <li className="active"><Link to="/dashboard"><Icon name="dashboard" /></Link></li>
                            <li><Link to="/report"><Icon name="chart" /></Link></li>
                            <li><Link to="/team"><Icon name="team" /></Link></li>
                            <li><Link to="/notes"><Icon name="notes" /></Link></li>
                            <li><Link to="/settings"><Icon name="settings" /></Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="logout">
                    <p><Icon name="logout" /></p>
                </div>
            </div>
        </>
    )
}

export default LeftSideHeader;