import { useState } from 'react'
import styles from '../style';
import { close, logo, menu } from '../assets';
import { navLinks } from './constants';
import ButtonNav from './ButtonNav';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`fixed w-screen flex py-6 justify-between items-center ${styles.paddingX} ${styles.flexCenter} z-[999] bg-primary bg-opacity-25`}>
      <a href='#home'><img src={logo} className='w-[60px] h-[50px] mr-10' /> </a>
      <div className={`flex-1 ${styles.flexStart}  flex-col xl:px-0 sm:px-0 px-6`}>
      <a href='#home'><h1 className='flex-1 text-gradient1 font-poppins font-semibold ss:text-[32px] 
        text-[32px] ss:leading-[32px] leading-[32px]'>ADAMINT</h1></a>
      </div>
      <ul className='list-none md:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] 
            mr-10 text-white`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
        <ButtonNav />
      </ul>


      <div className='md:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt="menu"
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute
            top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>

          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav) => (
              <li key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] 
            mb-4 text-white`}>
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
            <ButtonNav />
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar