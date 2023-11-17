import calendar from './calendar.svg'
import dashboard from './dashboard.svg'
import inventory from './inventory.svg'
import { useState } from 'react'
import { RxDotFilled } from 'react-icons/rx'

const Slider = () => {
    const slides = [
        {
            url: calendar
        },
        {
            url: dashboard
        },
        {
            url: inventory
        },
    ]
    const [currentIndex, setCurrentIndex] = useState(0)
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }


    return (
        <div id='gallery' className='relative w-full group' >
            <div className='relative h-56 overflow-hidden rounded-lg md:h-96'>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute w-full h-full -translate-x-full ${
                            index === currentIndex ? 'translate-x-0' : ''
                        } transition-transform ease-in-out duration-700`}
                    >
                        <img
                            src={slide.url}
                            className="w-full h-full"
                            alt=""
                        />
                    </div>
                ))}
            </div>
            <button type="button" onClick={prevSlide} className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                <span className="invisible group-hover:visible inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-cyan-200 opacity-40 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" onClick={nextSlide} className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                <span className="invisible group-hover:visible inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-cyan-200 opacity-40 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
            <div className='flex top-4 justify-center py-2 text-cyan-200 opacity-20'>
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} className='text-2xl cursor-pointer' onClick={() => setCurrentIndex(slideIndex)}>
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>

        /* <div className='w-full m-auto relative group'>
            <div 
                style={{backgroundImage: `url(${slides[currentIndex].url})` }}
                className='h-[300px] sm:min-h-[344px] w-full bg-no-repeat bg-contain bg-center rounded-2xl duration-700'/>
            <button type="button" onClick={prevSlide} className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                <span className="invisible group-hover:visible inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-cyan-200 opacity-40 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" onClick={nextSlide} className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="invisible group-hover:visible inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-cyan-200 opacity-40 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
            <div className='flex top-4 justify-center py-2 text-cyan-200 opacity-20'>
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} className='text-2xl cursor-pointer' onClick={() => setCurrentIndex(slideIndex)}>
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div> */

    )
}

export default Slider