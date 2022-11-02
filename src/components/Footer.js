import React from "react"
import stacyS from "../images/stacyS.png"

export default function Header() {
    return (
        <footer className="stacy-footer py-5 md:text-lg xs:text-sm">


            <ul className="md:flex md:justify-around xs:block p-9">
                <div className="flex justify-start">
                    <img alt='Cursive S logo' src={stacyS} className='h-28'></img>
                    <li>
                        <p>Stacy Inman</p>
                        <p>stacyinmanpismobeach@gmail.com</p>
                        <p>PO Box 3009</p>
                        <p>Shell Beach CA 93448</p>
                    </li>
                </div>
                <li className="md:text-right md:mt-0 xs:text-center xs:mt-12">
                    <p>Paid for by Stacy Inman for City Council 2022</p>
                    <p>&#169; Stacy Inman for City Council 2022 </p>
                </li>
            </ul>

            <h5 className="text-center text-lg italic">"Passion and Preservation for Pismo Beach"</h5>


        </footer>
    )
} 