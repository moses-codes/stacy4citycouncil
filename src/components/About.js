import React from "react"
import stacyInman from "../images/stacy-closeShot.jpeg"

export default function About(props) {

    const aboutContent = props.content

    return (
        <div className="about-main pb-5 ">
            <section id='about' className=" lg:pt-24  lg:flex lg:justify-around lg:h-auto xs:block">

                <div className="w-2/4 px-5 xs:w-full xs:pt-24
            ">
                    <h2
                        className="py-16 xs:text-center lg:text-left"
                    >About Stacy Inman</h2>

                    {aboutContent.paragraphText.map(el => {
                        return (<p className="font-extralight text-xl pb-10 xs:text-center
                            lg:text-left
                    ">
                            {el}
                        </p>)
                    })}
                    <h3
                        className="about-stinger pb-16 xs:text-center lg:text-left">
                        {aboutContent.stinger}</h3>

                </div>

                <img
                    className="about-img p-10 rounded-xl my-auto lg:h-full lg:w-5/12 xs:h-full xs:mx-auto lg:block"
                    src={stacyInman} />

            </section>

            <div href="#" className="donate-btn text-xl mb-10 mx-auto">Join the Campaign</div>

        </div>
    )
}