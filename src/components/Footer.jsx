import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from './constants';

const Footer = () => (
  <section className={`${styles.flexCenter} relative z-[1] sm:snap-start flex-col pb-[80px]`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <img src={logo}
          alt="adamint"
          className="w-[72px] h-[72px] object-contain" />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>Adamint </p>
        <p className={`${styles.paragraph} text-[14px] mt-4 max-w-[310px]`}>Empower Your Cardano
Experience </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div key={footerLink.title}
            className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerLink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerLink.links.map((link, index) => (
                <li key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] 
                    text-dimWhite hover:-translate-y-0.5 cursor-pointer 
                    ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}`}>
                      <a href={link.link} target="_blank" rel="noreferrer">
                        {link.name}
                      </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full flex justify-between items-center 
    flex-col pt-6 border-t-[1px] border-t-[#3f3r45]">
      <p className="font-poppins font-normal text-center text-[18px] 
      leading-[27px] text-white">
        2023 Adamint. All Rights Reserved.
      </p>
      <div className="flex flex-row my-6">
        {socialMedia.map((social, index) =>(
          <a key={social.id} href={social.link} target="_blank" rel="noreferrer">
            <img 
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer hover:opacity-30
            ${index !== socialMedia.length -1 ? 'mr-6' : 'mb-0'}`}
          />
          </a>

        ))}
      </div>
    </div>
    <div className='absolute z-[0] bottom-0  w-[40%] h-[55%] rounded-full bg-cyan-800/70 blur-[100px] pointer-events-none' />

  </section>
)

export default Footer