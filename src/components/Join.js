import { React } from "react"
import stacyImg from '../images/stacy-projectCrop.jpeg'

export default function Join() {

    const styles = {
        border: 0,
        width: 100 + '%',
    }

    return (
        <main className="text-center stacy-win" id='join'>
            <div>
                <img src={stacyImg} />
            </div>
            <div className="campaign-form bg-white w-2/4 p-3 rounded-xl">
                <h2 className="w-auto py-5">
                    Help Stacy Win!
                </h2>
                <iframe title='Join campaign form' src="https://www.cognitoforms.com/f/CQO6e9E-sEmtGc0QTWx8aQ/1" style={styles} height="620" sandbox='allow-scripts allow-same-origin' />
            </div>
        </main>
    )
}