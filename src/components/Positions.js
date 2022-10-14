import React from 'react'
import stacyInman from "../images/stacy-close.jpeg"
import FadeInSection from './FadeInSection'
export default function Positions(props) {
    const pageContent = props.props.positions
        .map(item => {
            return (
                <div key={item.item} className='pb-10 text-left positionItems'>
                    <h3 className='font-bold'>{item.heading}</h3>
                    <p className='text-xl'>{item.item}</p>
                </div>
            )
        })

    const bpXs = [
        'block',
        'mx-0',
        'text-center'
    ]
        .map(el => `xs:${el}`)
        .join(' ')

    return (
        <div className='md:mt-0 xs:mt-28 pb-16' id='positions'>

            <section className={"pb-5 xl:pt-16 l:h-screen xl:flex xl:justify-center xl:mr-32 " + bpXs}>

                <div className='text-center w-2/4 pt-20 m-auto xs:w-auto'>
                    <img
                        alt='Stacy poses against a tree.'
                        className="inline-block w-3/5 rounded-xl mb-5"
                        src={stacyInman} />
                    <h3 className='text-3xl'>"Passion and preservation for Pismo Beach."</h3>
                </div>
                <FadeInSection>
                    <div className="w-2/4 pt-16 m-auto xs:w-4/5">
                        <h2 className="font-bold pb-10">Stacy stands for...</h2>
                        {pageContent}
                    </div>
                </FadeInSection>
            </section>
            <div className="text-center mx-auto lg:w-2/4 lg:p-5 w-full m-3 bg-slate-200 p-3 rounded-xl">
                 <p className="py-3"><span className='text-3xl'>"Thank you to everyone </span>who came out to the League of Women Voters Candidate forum on Thursday, October 6, 2022. Four of the Five Candidates attended the well-run event.
                 Let’s think about Pismo Beach’s future and not its past.
                 If you were unable to attend in person – please watch the Candidate Forum, click the button below to view it.</p>
                 <a className="block w-40
                md:text-2xl my-2 
                text-white bg-red-700 py-2 px-10 
                rounded-xl mx-auto xs:text-md text-center"
                target="_blank" rel="noopener noreferrer"
                href='https://slo-span.org/meeting/ef_20221006/'
                >Watch</a>
                 <p className="text-xl font-bold mb-3 text-center ">'Life must be lived forwards.' </p>
                 <p className='text-center'>See you on the campaign trail!"</p>
                 <p className='text-center'>-- Stacy</p>
                 <p className='text-center'>October 11, 2022</p>
            </div>

        </div>
    )

}
