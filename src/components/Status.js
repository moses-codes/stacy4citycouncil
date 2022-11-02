import stacy from '../images/stacy-banner.jpeg'

export default function Status() {
    return (<div className="flex flex-col w-full lg:flex-row mt-0 bg-white">


        <div className="card lg:card-side bg-base-100 shadow-xl mx-10 bg-white text-black">
            <img className='lg:w-2/4 w-full' src={stacy}></img>
            <div className='p-10'>
                <h2 className='text-5xl font-semibold mb-10'>October 30, 12:00pm</h2>
                <h2 className='text-4xl mb-10'>Anita Shower's radio show</h2>
                <p className='text-lg lg:text-xl mb-10'>Stacy will be Anita Shower's Guest on The Pismo Beach Today Show, which airs on <span className='font-semibold'>KVEC Radio 920 AM/96.5 FM radio Sunday, October 30th, 2022 at noon</span>. Tune in! In the meantime, you can also view a recording of Stacy's livestream from October 27 down below.</p>
                <a className="text-white bg-red-700 py-2 px-10
                    rounded-xl mx-auto xs:text-md text-center"
                    target="_blank" rel="noopener noreferrer"
                    href='https://fb.watch/grRt5zVSXT/'
                >Watch recording</a>
            </div>
        </div>

    </div >)
}   