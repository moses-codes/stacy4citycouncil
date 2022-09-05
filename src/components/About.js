import React from "react"
import Content from "../data/content"
import stacyInman from "../images/stacy-closeShot.jpeg"

export default function About(props) {

    const aboutContent = props.content



    return (
        <section className="about-main flex justify-around h-screen">

            <div className="w-2/4">
                <h2
                    className="py-16"
                >About Stacy Inman</h2>

                {aboutContent.paragraphText.map(el => {
                    return (<p className="font-extralight text-xl pb-10">
                        {el}
                    </p>)
                })}
                <h3
                    className="about-stinger pb-16">
                    {aboutContent.stinger}</h3>
                <a href="#" className="donate-btn ">Join the Campaign</a>
            </div>


            <img
                className="about-img rounded-xl my-32 h-4/5 w-auto"
                src={stacyInman} />




        </section>
    )
}