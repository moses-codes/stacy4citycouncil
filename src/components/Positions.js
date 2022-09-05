import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import stacyInman from "../images/stacy-close.jpeg"
export default function Positions(props) {
    const specialChar = '>'
    const pageContent = props.props.positions
        .map(item => {
            return (
                <div className='pb-10 text-left'>
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
        <div>

            <section className={"xl:pt-16 xl:h-screen xl:flex xl:justify-center xl:mr-32 " + bpXs}>

                <div className='text-center w-2/4 pt-20 m-auto xs:w-auto'>
                    <img
                        className="inline-block w-3/5 rounded-xl pb-5"
                        src={stacyInman} />
                    <h3>"Passion and preservation for Pismo Beach."</h3>
                </div>

                <div className="w-2/4 pt-16 m-auto xs:w-4/5">
                    <h2 className="font-bold pb-10">Stacy stands for...</h2>
                    {pageContent}
                </div>
            </section>

        </div>
    )

}