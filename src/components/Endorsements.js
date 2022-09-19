
import React from "react"
import { NavHashLink as Link } from "react-router-hash-link";
import stacySign from '../images/stacy-sign.jpeg'
import FadeInSection from "./FadeInSection";

export default function Endorsements(props) {

    const [letter, setLetter] = React.useState(false)

    function handleClick() {
        setLetter(prevLetter => !prevLetter)
    }

    const pageContent = props.props.endorsements
        .map(content => {
            return (
                <div key={content.author} className="endorsements-item lg:w-2/5 xs:w-full m-2 p-4">
                    <h4 className="lg:text-2xl xs:text-lg font-semibold pb-5">"{content.quote}"</h4>
                    <h5 className="text-lg">--{content.author}</h5>
                </div>
            )
        })

    const list = props.props.endorsementsList
        .map(el => {
            return (<li>
                <h4
                    className="text-xl pb-5"
                >{el}</h4>
            </li>)
        })

    const letterContents = (
        <div>
            <p className="text-xl pb-10">Over this period, we have watched the city develop and mature, mostly for the good I am pleased to say. I have worked with the city through the very difficult years of perfecting the Local Coastal Program and am currently serving on the Local Coastal Plan Advisory Committee. Kathy has served the community for many years through Meals on Wheels and was honored as Citizen of the Year for her efforts. </p>
            <p className="text-xl pb-10">It is with these years of experience that we want to endorse Stacy Inman for City Council. Stacy was appointed to the Planning Commission in 2016. She was new to the city as were a number of Planning Commission members. It was during that time when I became familiar with her as she developed her understanding of Planning responsibilities. Her legal background providing a “well-reasoned” approach to her position on the thorny issues that confront both the Commission and the Council.</p>
            <p className="text-xl pb-10">To be sure, Stacy and I have not always seen the future of the city in the same way. What is important to me however, in endorsing a candidate, is the individual’s ability and willingness to engage and listen to the opposing point of view. Stacy Inman is outstanding in this regard and along with her proven ability to Chair the Commission, maintain civility and decorum and bring thoughtful decision making to the political process, she is at the top of the list for qualified candidates for this elected position.</p>
            <p className="text-xl pb-10">As Kathy and I have recently moved to New Mexico, we will not be allowed to vote for Stacy, but we urge our friends and neighbors to support her. Local issues will forever need a patient, thoughtful and approachable Councilperson. Stacy Inman is that person.</p>
            <p className="text-xl pb-5 font-bold">Steve & Kathy Puglisi</p>
            <p className="text-xl pb-10 font-bold">Deer Canyon Preserve, Mountainair, New Mexico</p>
        </div>
    )
    return (
        <section id='endorsements' className='endorsements-main py-32 border-b'>
            <h2 className="mb-15">Endorsements</h2>
            <div className="lg:flex xs:block flex-wrap justify-around px-12 py-12 border-b">
                {pageContent}
            </div>
            <FadeInSection>
                <section className="lg:px-28 xs:px-10 pt-12 border-b bg-gray-100">
                    <p className="text-xl font-bold pb-10">September 6</p>
                    <p className="text-xl pb-10"><span className="text-2xl font-bold">As a 36 year resident of Pismo Beach, </span>I would like to take the opportunity to heartily endorse Stacy Inman for City Council. My bride, Kathy, and I moved from San Luis Obispo to Sunset Palisades in 1985. I was the Architect who designed the Palisades Community with Stan Bell who was the developer and our dear friend.</p>

                    <div className="lg:block xs:hidden">
                        {letterContents}
                    </div>

                    <div className="lg:hidden xs:block">
                        {letter ? letterContents : ''}
                        <div className="donate-btn text-xl mb-10"
                            onClick={handleClick}
                        >{letter ? "< Close" : `Read More >`}</div>
                    </div>
                </section>
            </FadeInSection>

            <div className="lg:flex xs:block justify-center mt-12">

                <img src={stacySign}
                    className='h-full lg:mx-20 lg:w-4/12 rounded-xl xs:w-2/4 xs:mx-auto mt-20'
                    alt='A lawn sign that reads vote for Stacy Inman'
                ></img>
                <FadeInSection>
                    <div>
                        <h3 className="italic font-bold lg:text-left xs:text-center mb-6 lg:mt-0 xs:mt-10">Stacy Inman is proudly endorsed by</h3>
                        <ul className="lg:text-left xs:text-center">
                            {list}
                        </ul>
                        <Link className="donate-btn text-xl mb-10 lg:mx-0 xs:mx-auto"
                            smooth to='#join'
                        >Endorse Stacy Inman</Link>
                    </div>
                </FadeInSection>
            </div>

        </section>
    )
}