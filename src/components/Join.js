import { React } from "react"
import stacyImg from '../images/stacy-projectCrop.jpeg'

export default function Join() {

    const styles = {
        border: 0,
        width: 100 + '%',
    }

    return (
        <main className="flex text-center stacy-win xs:block xl:flex py-20" id='join'>
            <div className="h-auto lg:w-5/12 xs:w-full xs:px-10 xs:mx-auto">
                <img className='h-full w-auto rounded-xl' src={stacyImg} />
            </div>
            <div className="campaign-form bg-white lg:px-10 lg:w-7/12 rounded-xl xs:mx-auto xs:w-full xs:px-2">
                <h2 className="w-auto py-5">
                    Help Stacy Win!
                </h2>
                <iframe title='Join campaign form' src="https://www.cognitoforms.com/f/CQO6e9E-sEmtGc0QTWx8aQ/1" style={styles} height="620" sandbox='allow-scripts allow-same-origin' />
            </div>
        </main>
    )
}