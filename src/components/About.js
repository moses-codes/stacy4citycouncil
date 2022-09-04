import React from "react"
import Content from "../data/content"
import stacyInman from "../images/stacy-closeShot.jpeg"

export default function About(props) {

    const aboutContent = props.content

    return (
        <section className="about-main flex justify-between h-screen">

            <div className="py-10 px-20 pr-20 w-3/5">
                <h2>About Stacy Inman</h2>

                {aboutContent.paragraphText.map(el => {
                    return (<p className="text-xl pb-5">
                        {el}
                    </p>)
                })}
                <h3
                    className="about-stinger">
                    {aboutContent.stinger}</h3>
                <a href="#" className="donate-btn ">Join the Campaign</a>
            </div>

            <div className="about-img h-screen w-auto">
                <img
                    className="h-full "
                    src={stacyInman} />
            </div>

        </section>
    )
}