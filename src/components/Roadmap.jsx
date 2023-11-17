import { roadmapItems } from './constants/index'
import styles, { layout } from "../style";


// Roadmap content comes from the file index.js on the components/constat folder (roadmapItems)
const Roadmap = () => {
  const lastItem = roadmapItems.length - 1
  return (
    <section id='roadmap' className={`relative ${layout.roadmapSection} snap-center`}>
      <h2 className={`${styles.heading2} text-gradient1 text-center`}>Roadmap 2.0</h2>
      <ol className="items-center flex flex-col sm:flex-row w-full py-20" >
        {roadmapItems && roadmapItems.map((item, index) =>
          <li key={item.id} className={`relative mb-6 sm:mb-0 w-[100%]`}>
            <div className="flex items-center justify-center">
              
              {index !== lastItem ? (
                <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full ring-0 bg-cyan-900 sm:ring-8 ring-gray-900 shrink-0  hover:-translate-y-0.5 duration-300">
                  <svg className="w-4 h-4 text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
              ) : (
                <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full ring-0 bg-cyan-900 sm:ring-8 ring-gray-900 shrink-0  hover:-translate-y-0.5 duration-300">
                  <svg className="w-4 h-4 text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.546.5a9.5 9.5 0 1 0 9.5 9.5 9.51 9.51 0 0 0-9.5-9.5ZM13.788 11h-3.242v3.242a1 1 0 1 1-2 0V11H5.304a1 1 0 0 1 0-2h3.242V5.758a1 1 0 0 1 2 0V9h3.242a1 1 0 1 1 0 2Z" />
                  </svg>
                </div>
              )}
                <div className="absolute flex w-full bg-gray-700 h-0.5" />
            </div>
            <div className="justify-center flex flex-col sm:flex-row w-full mt-[20px]">
              <div className={`relative rounded-lg p-2 sm:w-[90%] h-full sm:max-h-[250px] overflow-y-auto no-scrollbar bg-black-gradient-2 shadow-md shadow-cyan-300/40  hover:-translate-y-0.5 duration-300`} >
                <h3 className="text-[18px] font-semibold text-white text-center">{item.title}</h3>
                <time className="block mb-2 text-[14px] text-right font-normal leading-none text-gray-200">{item.date}</time>
                <p className="font-normal text-white max-w-[180px] sm:h-[150px]">{item.content}</p>
              </div>
            </div>
          </li>
        )}
      </ol>
      <div className='absolute z-[0] top-[30%] -left-[15%] w-[40%] h-[35%] rounded-full bg-cyan-800/20 blur-[100px] pointer-events-none' />

    </section>
  )
}

export default Roadmap