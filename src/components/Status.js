import stacy from '../images/stacy-clams.jpg'
import stacyChowder from '../images/stacy-chowder.jpg'

export default function Status() {
    return (<div className="flex flex-col w-full lg:flex-row mt-10">

        {/* <div className="card lg:card-side bg-base-100 h-96 shadow-xl mx-20">
            <figure className='w-full'><img src={stacy} alt="Movie" className='' /></figure>
            <div className='card-body'>
                <h3 className='card-title mb-5'>A fun time at the 76th Annual Pismo Clam Festival! </h3>
                <p className="text-xl leading-8">Stacy had the pleasure of sampling delicious wines at the Wine Walk, spectating the “Under the Sea” parade, and judging the Clam Chowder Cook-off! Congratulations to Ada's Fish House for winning this year’s clam chowder cook-off, and to Pismo Beach Chamber of Commerce for their first place “Under the Sea” float! </p>

            </div>
        </div> */}

        <div className="card lg:card-side bg-base-100 shadow-xl mx-10">
            <figure className='lg:w-1/4'><img className='lg:h-96 w-auto h-72 rounded-lg' src={stacy} alt="Stacy posing with sam and pam clams" /></figure>
            <div className="card-body">
                <h3 className='card-title mb-5'>A fun time at the 76th Annual Pismo Clam Festival! </h3>
                <p className="text-xl leading-8">Stacy had the pleasure of sampling delicious wines at the Wine Walk, spectating the “Under the Sea” parade, and judging the Clam Chowder Cook-off! Congratulations to Ada's Fish House for winning this year’s clam chowder cook-off, and to Pismo Beach Chamber of Commerce for their first place “Under the Sea” float! </p>
            </div>
        </div>

        {/* <div className="divider lg:divider-horizontal">
        </div>
        <div className="grid flex-grow h-auto card bg-base-300 rounded-box place-items-center mx-5 p-5"><p>A fun time at this year’s Clam Festival! Sampled delicious wines at the Wine Walk, spectated the “Under the Sea”, and judged the Clam Chowder Cook-off! Congratulations to @Ada’s Fish House for winning this year’s clam chowder cook-off, and to @Pismo Beach Chamber of Commerce for their first place “Under the Sea” float!</p></div> */}
    </div>)
}   