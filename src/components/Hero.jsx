import styles from '../style';
import { logo1080 } from '../assets';
import Stats from './Stats';


const Hero = () => (
  <section id='home' className={`relative flex md:flex-row flex-col snap-start sm:h-screen py-20`}>
      <div className={`flex-1 ${styles.flexStart} flex-col  max-w[800px]`}>
        <div>
          <h1 className='flex1 font-poppins font-semibold ss:text-[32px] 
        text-[32px] text-white leading-[50px]'>
            <span className='text-gradient1 text-[52px] ss:text-[72px]'>Adamint</span> <br />
            <h2>Empower Your Cardano <br /> Experience</h2>
          </h1>


        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-[15px] ss:text-[15px] italic`}>
          Seamlessly manage assets, delegate to staking pools,
          stay organized with our calendar, and monitor your portfolio value in real-time.
          Welcome to a new era of Cardano with Adamint.
        </p>
      </div>
      <div className={`flex1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <div className='m-[60px] min-w-[350px] max-w-[500px]'>
          <img src={logo1080} alt="adamint-logo" className='w-[100%] h-[100%] relative z-[5] ' />
        </div>
      </div>
      <div className='absolute z-[0] bottom-[200px] right-[50px] w-[40%] h-[35%] rounded-full sm:bg-cyan-800 blur-[100px] pointer-events-none' />
  </section>
)

export default Hero