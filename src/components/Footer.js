import React from "react"
import StacyS from "../images/stacyS.png"

export default function Header() {
    return (
        <footer className="stacy-footer py-5 md:text-lg xs:text-sm">


            <ul className="flex justify-around p-9">
                <li>
                    <p>stacyinmanpismobeach@gmail.com</p>
                    <p>PO Box 3009</p>
                    <p>Shell Beach CA 93448</p>
                </li>
                <li className="text-right">
                    <p>Paid for by [organization]</p>
                    <p>&#169; 2022 Stacy Inman for City Council</p>
                </li>
            </ul>


        </footer>
    )
} 