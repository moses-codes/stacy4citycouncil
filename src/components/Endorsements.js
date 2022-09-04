import React from "react"
export default function Endorsements(props) {

    console.log(props)
    /*
    const [page, setPage] = React.useState(true)

    function handleClick() {
        console.log('click')
    }
    */
    const pageContent = props.props.endorsements
        .map(content => {
            return (
                <div className="endorsements-item w-2/5 m-2 p-4">
                    <h4>"{content.quote}"</h4>
                    <h5>{content.author}</h5>
                </div>
            )
        })

    const list = props.props.endorsementsList
        .map(el => {
            return (<li>
                <h4
                    className="text-xl pb-5"
                >{el}</h4>
            </li>)
        })

    return (
        <section className='endorsements-main  py-32'>
            <h2 className="mb-15">Endorsements</h2>
            <div className="flex flex-wrap justify-around px-44 pb-24">
                {pageContent}
            </div>

            <div>
                <h2> Endorsers</h2>
                <ul className="text-center p-11">
                    {list}
                </ul>
            </div>

            <div
                className="donate-btn endorse-btn"
            >Endorse Stacy Inman</div>
        </section>
    )
}