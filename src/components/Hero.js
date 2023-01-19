import { React, useState } from "react"

import stacyImg from "../images/stacy-PierPlaza.jpg"

export default function Hero() {

    return (
        <main id='hero' className={" w-full min-h-screen max-h-auto pb-10 block m-0 relative bg-white"}>
            <div className={"xl:pt-96 xl:pl-36 pt-32"}>
                <h1 className="xs:text-5xl md:text-8xl 
                md:mb-5 xl:text-left xs:w-auto xs:text-center
                xs:text-white xs:mb-2">Stacy Inman</h1>
                <h3
                    className="xs:mb-0 md:md-36 md:text-black
                    xl:text-left xs:text-center md:text-3xl  
                    xs:text-lg xs:text-white"
                >Pismo Beach City Council Member</h3>

            </div>




        </main >
    )
}