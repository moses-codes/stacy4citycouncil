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
        <div id='positions'>

            <section className={"pb-20 xl:pt-16 l:h-screen xl:flex xl:justify-center xl:mr-32 " + bpXs}>

                <div className='text-center w-2/4 pt-20 m-auto xs:w-auto'>
                    <img
                        alt='Stacy poses against a tree.'
                        className="inline-block w-3/5 rounded-xl mb-5"
                        src={stacyInman} />
                    <h3>"Passion and preservation for Pismo Beach."</h3>
                </div>
                <FadeInSection>
                    <div className="w-2/4 pt-16 m-auto xs:w-4/5">
                        <h2 className="font-bold pb-10">Stacy stands for...</h2>
                        {pageContent}
                    </div>
                </FadeInSection>
            </section>

        </div>
    )

}