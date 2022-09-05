import { React, useEffect, useState } from "react"
import StacyS from "../images/stacyS.png"

export default function Header() {
    // Sticky Menu Area
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

    const [navbarOpen, setNavbarOpen] = useState(false)

    function handleToggle() {
        setNavbarOpen(prevBar => !prevBar)
    }


    //Method that will fix header after a specific scrollable 
    const isSticky = (e) => {
        const header = document.querySelector('.header-section');
        const scrollTop = window.scrollY;
        scrollTop >= 250 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
    };

    const dropDownLinks = (
        <div className="ml-10 md:hidden h-full">
            <li className="pt-6 bg-gray-300 ">Positions</li>
            < li className="pt-6 bg-gray-300" > About</li >
            <li className="pt-6 bg-gray-300 ">Endorsements</li>
            <li className="pt-6 bg-gray-300 ">Join</li>
        </div >
    )

    return (
        <header className=" h-24 px-24 xs:px-4 text-lg w-full is-sticky">

            <ul className="h-24 nav-btns text-2xl flex md:justify-between xs:justify-start ">
                <li><img src={StacyS}
                    className="stacyS-logo" /></li>
                <li className="pt-6 hidden md:block">Positions</li>
                <li className="pt-6 hidden md:block">About</li>
                <li className="pt-6 hidden md:block">Endorsements</li>
                <li className="pt-6 hidden md:block">Join</li>

                <div className="flex flex-col pt-5">
                    <button
                        className="md:hidden xs:ml-10 pl-0 text-left"
                        onClick={handleToggle}>{navbarOpen ? 'open' : 'close'}</button>

                    {!navbarOpen ? dropDownLinks : ''}
                </div>
            </ul>

        </header>
    )
} 