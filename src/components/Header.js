import { React, useEffect, useState } from "react"
import StacyS from "../images/stacyS.png"
import { HiMenu } from 'react-icons/hi';
import { Router, BrowserRouter } from 'react-router-dom'
import { NavHashLink as Link } from "react-router-hash-link";

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
        <div className="ml-10 md:hidden h-full ">
            <Link smooth to='#positions' className="block p-6 bg-gray-300">Positions</Link>
            <Link smooth to='#about' className="block p-6 bg-gray-300" >About</Link>
            <Link smooth to='#endorsements' className="block p-6 bg-gray-300 ">Endorsements</Link>
            <Link smooth to='#join' className="block p-6 bg-gray-300 ">Join</Link>
        </div >
    )

    return (
        <header className=" h-24 text-center xs:px-4 text-lg w-full is-sticky">

            <ul className="h-24 nav-btns text-2xl mx-auto flex md:justify-around xs:justify-start">
                <li><img src={StacyS}
                    className="stacyS-logo" /></li>
                <Link to='#positions' smooth className="pt-6 hidden md:block">
                    Positions</Link>
                <Link to='#about' smooth className="pt-6 hidden md:block">About</Link>
                <Link to='#endorsements' smooth className="pt-6 hidden md:block">Endorsements</Link>
                <Link to='#join' smooth className="pt-6 hidden md:block">Join</Link>

                <div className="flex flex-col pt-5">
                    <button
                        className="md:hidden xs:ml-10 pl-0 text-left"
                        onClick={handleToggle}><HiMenu className='pt-2' fontSize="1.5em" /></button>

                    {navbarOpen ? dropDownLinks : ''}
                </div>
            </ul>

        </header>
    )
} 