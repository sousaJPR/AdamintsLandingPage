import styles, { layout } from "./style"
import { arrowFaq } from './assets/index'
import { faqItems } from "./components/constants"
import { useState } from "react"

const FAQ = () => {
  // State to check wich box is active
  const [activeItem, setActiveItem] = useState(null)

  const handleItemClick = (itemId) => {
    setActiveItem((prevItem) => (prevItem === itemId ? null : itemId));
  };

  // function to allow FAQ to render links when "<a /> is found in the items array"
  const renderContent = (content) => {
    // split content to get links
    const parts = content.split(/(<a .*?<\/a>)/);

    return parts.map((part, index) => {
      // check if the part is a link
      const isLink = /<a .*?<\/a>/.test(part);

      // if the part is a link, apply a different text color
      return isLink ? (
        <div key={index} dangerouslySetInnerHTML={{ __html: part }} className="text-cyan-300" />
      ) : (
        <span key={index}>
          {part}
        </span>
      );
    });
  };

  return (
    <section id="faq" className={`relative snap-start ${layout.faq}`}>
      <h2 className={`${styles.heading2} text-gradient1 pb-20 text-center`}>FAQ</h2>
      <div className="flex flex-col h-[35%] max-w-[80%] overflow-y-auto no-scrollbar rounded-lg">
        
        {faqItems && faqItems.map(item => (
          <div 
            key={item.id} 
            className={`relative w-full bg-cyan-200 bg-opacity-10 shadow-md shadow-cyan-300/40 
            rounded-lg mb-4 hover:-translate-y-0.5 duration-300`}>
            <input 
              type="checkbox" 
              id={item.id} 
              className="absolute peer invisible"
              checked={activeItem === item.id}
              onChange={() => handleItemClick(item.id)} />
            <label htmlFor={item.id} >
              {/* Heading */}
              <h4 className={`${styles.headingFaq} cursor-pointer px-5 py-2`}>{item.title}</h4>
              {/* Icon */} </label>
            <div className="absolute top-2 right-2 md:top-[15px] md:right-[30px] rotate-0 peer-checked:rotate-180 pointer-events-none">
              <img src={arrowFaq} alt="icon" className="w-[15px] md:w-[20px] object-contain" />
            </div>
            {/* Content */}
            <div className='max-h-0 overflow-hidden peer-checked:max-h-full'>
              <p className={styles.paragraphFaq}>
                {renderContent(item.content)}
              </p>
            </div>
          </div>
        ))}
      <div className='absolute z-[0] bottom-[20%] -right-[15%] w-[40%] h-[35%] rounded-full bg-cyan-800/20 blur-[100px] pointer-events-none' />

      </div>
    </section>
  )
}

export default FAQ