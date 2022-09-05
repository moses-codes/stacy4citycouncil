import { React } from "react"

export default function Join() {

    const styles = {
        border: 0,
        width: 100 + '%',
    }

    return (
        <main className="text-center">
            <h2 className="w-auto pb-20">
                Will you join the campaign??
            </h2>
            <iframe title='Join campaign form' src="https://www.cognitoforms.com/f/CQO6e9E-sEmtGc0QTWx8aQ/1" style={styles} height="820" sandbox='allow-scripts allow-same-origin' />
        </main>
    )
}