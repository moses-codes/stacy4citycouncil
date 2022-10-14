import { React, useState } from "react"
import img from "../images/stacy-banner.jpeg"
export default function Events() {
    return (
        <div className="hero h-auto bg-slate-200 py-5">
         <div className="hero-content flex-col lg:flex-row">
           <img src={img} className="max-w-sm rounded-lg xs:mr-0 lg:mr-5" />
           <div>
            <div className="xs:text-center lg:text-left">
              <h2 className="mb-6">Updates</h2>
              <p>
               <span className="text-2xl">"On October 12, 2022, </span>I was informed by Pismo Beach City Council staff that an error occurred in the printing of the voter’s guide for the 2022 election. My candidate statement was printed twice whereas Kevin Kreowski’s candidate statement was not printed. This is a terrible error which I had no control over. All candidate statements must be provided to all those who vote. I understand that the SLO County Elections is going to rectify this by sending out new voter guide pamphlets with the correct information-which includes each candidate’s statement-as soon as possible. In the meantime, you can read all candidate statements on the city’s election page at following link: 
              </p>
              <p className="my-4 text-blue-600 hover:italic"><a target="_blank" rel="noopener noreferrer" href='http://www.pismobeach.org/candidates' className="text-xl">www.pismobeach.org/candidates</a></p>
              <p className="mb-2">
               Be informed before you vote."
              </p>
              <p >
               --Stacy
              </p>


            
             </div>
           </div>
         </div>
        </div>
    )
}