import { React, useState } from "react"
import img from "../images/stacy-banner.jpeg"
export default function Events() {
    return (
        <div className="hero h-auto bg-slate-200 py-5">
         <div className="hero-content flex-col lg:flex-row">
           <img src={img} className="max-w-sm rounded-lg xs:mr-0 lg:mr-5" />
           <div>
            <div className="xs:text-center lg:text-left">
             <p className="py-6"><span className="text-2xl font-weight: 800">Thank you to everyone</span> who came out to the League of Women Voters Candidate forum on Thursday, October 6, 2022. Four of the Five Candidates attended the well-run event.
             Let’s think about Pismo Beach’s future and not its past.
             If you were unable to attend in person – please watch the Candidate Forum, click the button to view it here. 
             </p>
             <a className="block w-40
            md:text-2xl my-2 md:ml-16 xl:ml-0
            text-white bg-red-700 py-2 px-10 
            rounded-xl xs:mx-auto xs:text-md text-center"
            target="_blank" rel="noopener noreferrer"
            href='https://slo-span.org/meeting/ef_20221006/'
            >Watch</a>
             <h3>“Life must be lived forwards.” </h3>
             <p>See you on the campaign trail!</p>
             <p>-- Stacy</p>
             <h3>October 11, 2022</h3>
             </div>
           </div>
         </div>
        </div>
    )
}