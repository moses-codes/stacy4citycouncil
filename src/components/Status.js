import stacy from '../images/gettoknow.jpeg'

export default function Status() {
    return (<div className="flex flex-col w-full lg:flex-row mt-10">


        <div className="card lg:card-side bg-base-100 shadow-xl mx-10">
            <img className='lg:w-2/4 w-full' src={stacy}></img>
            <div className='p-10'>
                <h2 className='text-5xl font-semibold mb-10'>October 27, 9:00am</h2>
                <h2 className='text-4xl mb-10'>Get-to-know Livestream</h2>
                <p className='text-lg lg:text-xl mb-10'>Join me for a livestream. I will cover several topics that relate to business, water, employee parking, residential challenges, city goals and more.
                    Feel free to post questions from wherever your are viewing from. I will do my best to answer all of your questions and concerns.</p>
                <a className="block w-40
                md:text-2xl my-2 
                text-white bg-red-700 py-2 px-10 
                rounded-xl mx-auto xs:text-md text-center"
                    target="_blank" rel="noopener noreferrer"
                    href='https://www.facebook.com/events/1538560379960256?ref=newsfeed'
                >Watch</a>
            </div>
        </div>

    </div>)
}   