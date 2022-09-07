import React from "react"
import { NavHashLink as Link } from "react-router-hash-link";

export default function Endorsements(props) {
    /*
    const [page, setPage] = React.useState(true)

    function handleClick() {
        console.log('click')
    }
    */
    const pageContent = props.props.endorsements
        .map(content => {
            return (
                <div key={content.author} className="endorsements-item md:w-2/5 xs:w-full m-2 p-4">
                    <h4 className="text-2xl font-bold pb-5">"{content.quote}"</h4>
                    <h5 className="text-lg">{content.author}</h5>

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
        <section id='endorsements' className='endorsements-main py-32'>
            <h2 className="mb-15">Endorsements</h2>
            <div className="md:flex xs:block flex-wrap justify-around px-12 py-12">
                {pageContent}
            </div>

            <div>
                <h3 className="italic text-center">Stacy is proudly endorsed by...</h3>
                <ul className="text-center p-11">
                    {list}
                </ul>
            </div>

            <Link className="donate-btn text-xl mb-10 mx-auto"
                smooth to='#join'
            >Endorse Stacy Inman</Link>
        </section>
    )
}