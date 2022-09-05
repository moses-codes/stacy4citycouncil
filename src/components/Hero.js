import React from "react"
export default function Hero() {
    const styles = {
        "max-width": 500 + 'px',
        "min-width": 250 + 'px',
    }
    return (
        <main className="h-screen">
            <div className="m-36">
                <h1>Stacy Inman</h1>
                <h3>For Pismo Beach City Council</h3>
                <div className="rounded-lg">
                    <iframe src="https://donorbox.org/embed/stacy-inman-for-city-council"
                        name="donorbox" allowpaymentrequest="allowpaymentrequest" seamless="seamless" frameborder="0" scrolling="no" height="900px" width="100%"
                    ></iframe>
                </div>
            </div>
        </main>
    )
}