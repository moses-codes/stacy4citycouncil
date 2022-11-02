import React from "react"
import stacyInman from "../images/stacy-closeShot.jpg"
import FadeInSection from "./FadeInSection";
import { NavHashLink as Link } from "react-router-hash-link";

export default function About(props) {

    const aboutContent = props.content

    return (
        <div className="about-main pb-5 h-auto">
            <section id='about' className=" lg:pt-10   lg:h-auto xs:block">
                <img
                    alt="Stacy Inman posing on Pismo Beach"
                    className="block rounded-xl h-auto lg:float-right lg:m-20 lg:w-4/12 mx-auto xs:w-4/5 xs:mt-5"
                    src={stacyInman} />
                <FadeInSection>
                    <div className="lg:w-auto lg:px-14 xs:w-full xs:pt-24 xs:px-5
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
                        <Link smooth to='#join' className="donate-btn text-xl mb-10 mx-auto text-center">Join the Campaign</Link>
                    </div>
                </FadeInSection>


            </section>



        </div >
    )
}