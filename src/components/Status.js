import stacy from '../images/stacy-banner.jpeg'

export default function Status() {
    return (<div className="flex flex-col w-full lg:flex-row mt-0 bg-white">


        <div className="card lg:card-side bg-base-100 shadow-xl mx-10 bg-white text-black mt-10">
            <img className='lg:w-2/4 w-full' src={stacy}></img>
            <div className='p-10 bg-white'>
                <h2 className='text-5xl font-semibold mb-10'>Election day is November 8th!</h2>
                <h2 className='text-4xl mb-10'>Get out and vote.</h2>
                <p className='text-lg lg:text-xl mb-10'>Get those ballots in. ou can also view a recording of Stacy's livestream from October 27 down below.</p>
                <a className="text-white bg-red-700 py-2 px-10
                    rounded-xl mx-auto xs:text-md text-center"
                    target="_blank" rel="noopener noreferrer"
                    href='https://fb.watch/grRt5zVSXT/'
                >Watch recording</a>
            </div>
        </div>

    </div >)
}   