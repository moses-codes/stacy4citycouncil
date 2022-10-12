import { React, useState } from "react"
export default function Hero() {

    // const [donateOn, setDonateOn] = useState(false)

    // const donorbox = (
    //     <iframe src="https://donorbox.org/embed/stacy-inman-for-city-council"
    //         title='donateWindow'
    //         name="donorbox" allowpaymentrequest="allowpaymentrequest" seamless="seamless" frameborder="0" scrolling="no" height="900px" width="100%"
    //         className="xs:p:0 mx-auto"
    //     >
    //     </iframe>
    // )

    // const donateWindow = (
    //     <div className="xl:pl-36 xs:p-0 ">
    //         {donorbox}
    //     </div >
    // )

    // function handleClick() {
    //     setDonateOn(prevSet => !prevSet)
    // }
    return (
        <main id='hero' className={"h-screen block m-0"}>
            <div className={"xl:p-36 xs:pt-32"}>
                <h1 className="xs:text-5xl md:text-8xl 
                md:mb-5 xl:text-left xs:w-auto xs:text-center
                xs:text-white xs:mb-2">Stacy Inman</h1>
                <h3
                    className="xs:mb-0 md:md-36 md:text-black
                    xl:text-left xs:text-center md:text-3xl  
                    xs:text-lg xs:text-white"
                >For Pismo Beach City Council</h3>
                
            </div>
            <a className="block w-72 text-2xl xl:mt-8 text-white bg-red-700 py-2 px-10 rounded-xl mx-auto xs:mt-16 md:ml-36 text-center"
                target="_blank" rel="noopener noreferrer"
                href='https://donorbox.org/stacy-inman-for-city-council'

            >Donation Site &gt;</a>


        </main >
    )
}