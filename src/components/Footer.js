import React from "react"
import StacyS from "../images/stacyS.png"

export default function Header() {
    return(
        <header className="nav-bar">
            
            <img src={StacyS} 
            className="nav-logo" />
            <ul className="nav-btns">
                <li>Positions</li>
                <li>About</li>
                <li>Endorsements</li>
                <li>Join</li>
            </ul>
            <div className="donate-btn header-btn">Donate</div>
            
        </header>
    )
} 