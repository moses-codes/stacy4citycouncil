import stacy from '../images/stacy_plate.png'
import stacyFam from '../images/stacy_fam.png'
import stacyJorge from '../images/stacy_jorgeJim.png'
import stacyShake from '../images/stacy_shake.png'

export default function Status() {
    return (<div className="w-full mt-0 bg-white mt-10 text-black bg-gray-300">

        <h2 className='lg:text-5xl text-3xl font-semibold mb-2 lg:ml-24 text-center'>Photos from the swearing-in ceremony</h2>
        <h2 className='text-2xl mb-10 lg:ml-24 text-center'>December 12, 2022</h2>


        {/* <div className="card lg:card-side bg-base-100 shadow-xl mx-10 bg-white text-black mt-10">
            <img className='lg:h-96 lg:w-auto w-full ' src={stacy} alt='Stacy in a formal blue top.'></img>
            <div className='p-5 bg-white'>
                <h2 className='lg:text-5xl text-3xl font-semibold mb-2'>Join us for the wearing-in ceremony</h2>
                <h2 className='text-4xl mb-2'>December 12, 2022 @ 5pm PST</h2>
                <p className='text-lg lg:text-lg mb-10 lg:w-1/2 mt-10' >To be held at Pismo Beach City Hall, or online via Zoom!</p>
                <a className="text-white bg-red-700 py-2 px-10
                    rounded-xl mx-auto xs:text-md text-center"
                    target="_blank" rel="noopener noreferrer"
                    href='https://us02web.zoom.us/j/84823715585'
                >Watch</a>
            </div>
        </div> */}

        <div className='lg:flex mx-5 justify-center'>
            <div className="lg:w-1/4 w-full lg:mx-10">
                <img src={stacy}
                    className='rounded w-full'
                    alt="Stacy Inman at her City Council seat and new name plate" />
                <p
                    className="mb-10"
                >Stacy Inman at her City Council seat and new name plate.</p>
                <img
                    src={stacyJorge}
                    className='rounded'
                    alt="image" />

                <p>Standing with Assistant City Manager Jorge Garcia and City Manager Jim Lewis.</p>
            </div>
            <div className="lg:w-2/4 w-full lg:mx-2">
                <img src={stacyFam}
                    className='rounded'
                    alt="Stacy Inman poses around her council seat with three family members." />

                <p>Stacy Inman with her family.</p>
                <img src={stacyShake}
                    className='rounded mt-3'
                    alt="Shaking hands with Mayor Ed Waage." />
                <p>Shaking hands with Mayor Ed Waage.</p>
            </div>
        </div>


    </div >)
}   