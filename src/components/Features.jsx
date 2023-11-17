import styles, { layout } from '../style';
import ButtonNav from './ButtonNav';
import Slider from './Slider/Slider';



const Services = () => (
    <section id='features' className={`relative ${layout.sectionReverse} snap-start`}>
      <div className={`${layout.sectionImgReverse} h-screen`}>
        <Slider/>
      </div>
      <div className={layout.sectionTextRight}>
        <h2 className={`${styles.heading2} text-gradient1`}>Dive into Adamint Features</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-5 italic`}>
        Navigate through Adamint's feature-rich dashboard, offering Profile management, Cardano News,
        Inventory tracking, Calendar organization, and real-time Charts. Experience Cardano like never before.
        </p>
        <ButtonNav />
        
      </div>
      <div className='absolute z-[0] bottom-[20%] -right-[15%] w-[40%] h-[35%] rounded-full bg-cyan-800/20 blur-[100px] pointer-events-none' />

    </section>
  )

export default Services