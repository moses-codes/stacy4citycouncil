import stacy from '../images/stacy-banner.jpeg'

export default function Status() {
    return (<div className="flex flex-col w-full lg:flex-row mt-0 bg-white">


        <div className="card lg:card-side bg-base-100 shadow-xl mx-10 bg-white text-black mt-10">
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
        </div>

    </div >)
}   