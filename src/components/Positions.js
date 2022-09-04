import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import stacyInman from "../images/stacy-close.jpeg"
export default function Positions(props) {
    const specialChar = '>'
    const pageContent = props.props.positions
        .map(item => {
            return (
                <div className='pb-10'>
                    <h3 className='font-bold'>{item.heading}</h3>
                    <p className='text-xl'>{item.item}</p>
                </div>
            )
        })

    /*
        const [page, setPage] = React.useState(true)
    
        function handleClick() {
            setPage(prevPage => !prevPage)
            console.log(page)
        }
    
        
        const specialLessThan = '<'
        const cvContent = props.props.CV
            .map(el => {
                return (
                    <li>
                        <h3>{el.heading}</h3>
                        <p>{el.item}</p>
                    </li>
                )
            })
    
        
    
        const positionsPage = (
            <div
                exit={{ y: 100 }}
            >
                <h2>Stacy stands for...</h2>
                {pageContent}
                <div
                    className="donate-btn positions-btn"
                    onClick={handleClick}
                >View CV {specialChar}  </div>
            </div>
        )
    
        const cvPage = (
            <section className="cv-main">
                <h2>CV</h2>
                <ul>
                    {cvContent}
                </ul>
                <div
                    className="donate-btn positions-btn"
                    onClick={handleClick}
                >{specialLessThan} Back</div>
    
            </section>
        )
    */
    return (
        <div>

            <section className="pt-16 h-screen flex justify-center mr-32">

                <div className='text-center w-2/4 pt-20'>
                    <img
                        className="inline-block w-3/5 rounded-lg"
                        src={stacyInman} />
                    <h3>"Passion and preservation for Pismo Beach."</h3>
                </div>

                <div className="w-2/4 pt-16">
                    <h2 className="pb-10">Stacy stands for...</h2>
                    {pageContent}
                </div>
            </section>

        </div>
    )

}