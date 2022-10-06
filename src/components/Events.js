import { React, useState } from "react"
import img from "../images/getToKnow.png"
export default function Events() {
    return (
        <div className="hero h-auto bg-base-200 py-5">
         <div className="hero-content flex-col lg:flex-row">
           <img src={img} className="max-w-sm rounded-lg xs:mr-0 lg:mr-5" />
           <div>
            <div className="xs:text-center lg:text-left">
             <h1 className="text-5xl ">Coffee & Conversation</h1>
             <h2>October 11, 2022</h2>
             <p className="py-6">You are all invited to join Coffee & Conversation with Stacy Inman at The Vespara Resort! Stacy will host a morning meet & greet by treating anyone interested to coffee/tea at the gorgeous Vespera Resort..</p>
             </div>
             <a className="block w-36
            md:text-2xl md:mt-10 md:ml-16 xl:ml-0
            text-white bg-red-700 py-2 px-10 
            rounded-xl xs:mx-auto xs:mt-2 xs:text-md"
            target="_blank" rel="noopener noreferrer"
            href='https://www.eventbrite.com/e/coffee-conversation-at-vespera-resort-on-pismo-b-tickets-431478332307'
            > RSVP</a>
           </div>
         </div>
        </div>
    )
}