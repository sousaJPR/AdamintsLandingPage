import {Link} from 'react-router-dom';

const ButtonNav = (styles) => {
  return (
    <Link to="/dapp">
    <button type="button" className={`py-2 px-4 bg-black-gradient-2 shadow-md shadow-cyan-300/40 font-poppins 
    font-medium text-[16px] text-white outline-none ${styles} rounded-[14px] mt-0 sd:block
    hover:-translate-y-0.5 duration-300`}
    >
      Enter App
    </button>
    </Link>
  )
}

export default ButtonNav