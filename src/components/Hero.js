import { React, useState } from "react"
export default function Hero() {

    const [donateOn, setDonateOn] = useState(false)

    const donateWindow = (
        <div className="xl:pl-36 xs:p-0">
            <iframe src="https://donorbox.org/embed/stacy-inman-for-city-council"
                name="donorbox" allowpaymentrequest="allowpaymentrequest" seamless="seamless" frameborder="0" scrolling="no" height="900px" width="100%"
                className="xs:p:0"
            >
            </iframe>
        </div >
    )

    function handleClick() {
        setDonateOn(prevSet => !prevSet)
    }

    return (
        <main className={"h-screen block m-0"}>
            <div className={"xl:pl-36 pt-44"}>
                <h1 className="xs:text-6xl md:text-8xl mb-5 xl:text-left xs:w-auto xs:text-center xs:text-white">Stacy Inman</h1>
                <h3
                    className="mb-36 xl:text-left xs:text-center xs:text-4xl xs:text-white"
                >For Pismo Beach City Council</h3>
            </div>

            <button className="block w-auto text-2xl xl:mt-32 xl:ml-36 text-white bg-red-700 py-2 px-10 rounded-xl xs:mx-auto xs:mt-40"
                onClick={handleClick}
            >Help Stacy Win!</button>

            {donateOn ? donateWindow : ''}

        </main >
    )
}