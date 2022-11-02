import { React, useEffect, useState } from "react"
import StacyS from "../images/stacyS.png"
import { HiMenu } from 'react-icons/hi';
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



    const isSticky = (e) => {
        const header = document.querySelector('.header-section');
        const scrollTop = window.scrollY;
        //scrollTop >= 250 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
    };

    const dropDownLinks = (

        //   <li><a>Item 1</a></li>
        //   <li><a>Item 2</a></li>
        //   <li><a>Item 3</a></li>

        <ul className="menu menu-compact lg:menu-normal bg-base-100 w-56 p-2 rounded-box">
            <li><Link onClick={handleToggle} smooth to='#positions' className="navlink block p-6 bg-gray-300">Positions</Link></li>
            <li><Link onClick={handleToggle} smooth to='#about' className="navlink block p-6 bg-gray-300" >About</Link></li>
            <li><Link onClick={handleToggle} smooth to='#endorsements' className="navlink block p-6 bg-gray-300 ">Endorsements</Link></li>
            <li><Link onClick={handleToggle} smooth to='#join' className="navlink block p-6 bg-gray-300 ">Join</Link></li>
        </ul>
    )

    return (
        <header className=" h-24 text-center xs:px-4 text-lg w-full is-sticky text-black"
        >

            <ul className="h-24 nav-btns text-2xl mx-auto flex md:justify-around xs:justify-start">
                <Link to='#hero' smooth><img src={StacyS}
                    alt='Cursive S'
                    className="stacyS-logo" /></Link>
                <Link to='#positions' smooth className="pt-6 hidden md:block navlink">
                    Positions</Link>
                <Link to='#about' smooth className="pt-6 hidden md:block navlink">About</Link>
                <Link to='#endorsements' smooth className="pt-6 hidden md:block navlink">Endorsements</Link>
                <Link to='#join' smooth className="pt-6 hidden md:block navlink">Join</Link>

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