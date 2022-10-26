import { React, useState } from "react"
import { NavHashLink as Link } from "react-router-hash-link";
export default function Hero() {

    return (
        <main id='hero' className={"w-full min-h-screen max-h-auto pb-10 block m-0 relative"}>
            <div className={"xl:pt-36 xl:pl-36 pt-32"}>
                <h1 className="xs:text-5xl md:text-8xl 
                md:mb-5 xl:text-left xs:w-auto xs:text-center
                xs:text-white xs:mb-2">Stacy Inman</h1>
                <h3
                    className="xs:mb-0 md:md-36 md:text-black
                    xl:text-left xs:text-center md:text-3xl  
                    xs:text-lg xs:text-white"
                >For Pismo Beach City Council</h3>

            </div>
            <a className="block w-72 text-2xl xl:my-4 text-white bg-red-700 py-2 px-5 rounded-xl mx-auto xl:ml-36 lg:mt-16 mt:5 text-center"
                target="_blank" rel="noopener noreferrer"
                href='https://donorbox.org/stacy-inman-for-city-council'

            >Donation Site &gt;</a>
            <div className="w-full bg-blue-900 bg-opacity-80 absolute bottom-0 xl:h-auto block lg:flex h-42">
                <div className="p-2 lg:p-5 text-white lg:w-2/4 w-full leading-normal text-center lg:text-left">
                    <h2 className="text-sm lg:text-2xl">Stacy is officially endorsed by the <span className='italic'>San Luis Obispo Tribune!</span></h2>
                </div>

                <div className='p-2 lg:p-5 text-white  lg:w-2/4 w-full text-center lg:text-left'>
                    <p className="font-semibold lg:text-xl text-sm">"Inman is a highly qualified candidate who would be a breath of fresh air on the City Council."</p>
                    <Link
                        smooth to='#endorsements'
                        className="block w-72 text-lg xl:my-4 text-white bg-red-700 py-2 px-10 rounded-xl mx-auto mt-5 lg:16 text-center">Read full quote below</Link>
                </div>
            </div>




        </main >
    )
}