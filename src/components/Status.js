import stacy from '../images/stacy-hanger.jpeg'

export default function Status() {
    return (<div className="flex flex-col w-full lg:flex-row mt-0 bg-white">


        <div className="card lg:card-side bg-base-100 shadow-xl mx-10 bg-white text-black mt-10">
            <img className='lg:h-96 lg:w-auto w-full ' src={stacy} alt='A doorhanger poster featuring Stacy in a formal blue top.'></img>
            <div className='p-5 bg-white'>
                <h2 className='lg:text-5xl text-3xl font-semibold mb-2'>Election day is November 8th!</h2>
                <h2 className='text-4xl mb-2'>Get out and vote.</h2>
                <p className='text-lg lg:text-lg mb-10 lg:w-1/2 mt-10' >Stacy and her crew of eight volunteers have placed these doorhangers on houses she hadn't yet visited. You can view a recording of Stacy's "Get-to-know" livestream from October 27 down below. Get those votes in!</p>
                <a className="text-white bg-red-700 py-2 px-10
                    rounded-xl mx-auto xs:text-md text-center"
                    target="_blank" rel="noopener noreferrer"
                    href='https://fb.watch/grRt5zVSXT/'
                >Watch</a>
            </div>
        </div>

    </div >)
}   