import React from "react"
import stacyImg from '../images/stacy-telescopeClose.jpeg'
export default function Hero() {
    const styles = {
        "max-width": 500 + 'px',
        "min-width": 250 + 'px',
    }

    const donateWindow = (
        <div className="xl:pl-36 xs:p-0">
            <iframe src="https://donorbox.org/embed/stacy-inman-for-city-council"
                name="donorbox" allowpaymentrequest="allowpaymentrequest" seamless="seamless" frameborder="0" scrolling="no" height="900px" width="100%"
                className="xs:p:0"
            >
            </iframe>
        </div >
    )
    return (
        <main className={"h-screen block m-0"}>
            <div className={"xl:pl-36 pt-36"}>
                <h1 className="text-8xl mb-5 xl:text-left xs:w-auto xs:text-center xs:text-white">Stacy Inman</h1>
                <h3
                    className="mb-36 xl:text-left xs:text-center xs:text-4xl xs:text-white"
                >For Pismo Beach City Council</h3>
            </div>




        </main >
    )
}