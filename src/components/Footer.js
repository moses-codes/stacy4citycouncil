import React from "react"
import StacyS from "../images/stacyS.png"

export default function Header() {
    return (
        <header className="flex justify-between items-center p-4 text-lg">

            <img src={StacyS}
                className="h-20" />

            <ul className="nav-btns flex justify-between p-9">
                <li>Positions</li>
                <li>About</li>
                <li>Endorsements</li>
                <li>Join</li>
            </ul>

            <div className="text-center
            h-7 bg-red-800
            pt-3
            pb-10
            w-40 
            rounded-md
            ">Donate</div>

        </header>
    )
} 