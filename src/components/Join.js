import { React } from "react"
import stacyImg from '../images/stacy-projectCrop.jpeg'

export default function Join() {

    const styles = {
        border: 0,
        width: 100 + '%',
    }



    return (
        <footer>
            <div className="flex text-center stacy-win xs:block xl:flex py-20 text-black bg-white" id='join'>

                <img className='inline-block xl:w-2/5 w-3/5 rounded-xl m-12' src={stacyImg} alt='Stacy poses at a construction site' />

                <div className="campaign-form bg-white lg:px-10 lg:w-7/12 rounded-xl xs:mx-auto xs:w-full xs:px-2">
                    <h1 className="w-auto py-5 lg:mt-52">
                        Stacy won!
                    </h1>
                    <h3>Thank you for your support!</h3>

                    <a className="block w-72 text-2xl xl:mt-16  text-white bg-red-700 py-2 px-10 rounded-xl xs:mx-auto xs:mt-24"
                        target="_blank" rel="noopener noreferrer"
                        href='https://donorbox.org/stacy-inman-for-city-council'
                    >Donation Site &gt;</a>
                </div>
            </div>
        </footer>
    )
}