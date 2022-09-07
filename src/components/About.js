import React from "react"
import stacyInman from "../images/stacy-closeShot.jpeg"
import FadeInSection from "./FadeInSection";
import { NavHashLink as Link } from "react-router-hash-link";

export default function About(props) {

    const aboutContent = props.content

    return (
        <div className="about-main pb-5 ">
            <section id='about' className=" lg:pt-10  lg:flex lg:justify-around lg:h-auto xs:block">
                <FadeInSection>
                    <div className="w-2/4 px-5 xs:w-full xs:pt-24
            ">

                        <h2
                            className="pb-4 xs:text-center lg:text-left"
                        >About Stacy Inman</h2>

                        {aboutContent.paragraphText.map(el => {
                            return (<p className="font-extralight text-xl pb-10 xs:text-center
                            lg:text-left
                    " key={el}>
                                {el}
                            </p>)
                        })}
                        <h3
                            className="about-stinger pb-16 xs:text-center lg:text-left">
                            {aboutContent.stinger}</h3>

                    </div>
                </FadeInSection>
                <img
                    alt="Stacy Inman posing on Pismo Beach"
                    className="about-img p-10 rounded-md my-auto lg:h-full lg:w-5/12 xs:h-full xs:mx-auto lg:block"
                    src={stacyInman} />

            </section>

            <Link smooth to='#join' className="donate-btn text-xl mb-10 mx-auto">Join the Campaign</Link>

        </div >
    )
}