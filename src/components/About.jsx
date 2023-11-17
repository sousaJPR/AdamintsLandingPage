import { features } from "./constants";
import styles, { layout } from "../style";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-2 rounded-[20px] w-[100%] md:w-[80%] md:p-6
  ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card hover:-translate-y-0.5 duration-300`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter}`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
      <div className="flex-1 flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[12px] md:text-[15px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
    
  </div>
)

const Business = () => {
  return (
    <section id="about" className={`relative ${layout.section} snap-start`}>
      <div className={`${layout.sectionTextLeft}`}>
        <h2 className={`text-[28px] sm:${styles.heading2} text-gradient1`}>Redefining Cardano:</h2>
        <br className="sm:block" />
        <h3 className={`font-poppins font-semibold sm:${styles.heading2} text-[30px] text-white mt-[-30px] text-gradient1`}>Adamint Vision</h3>
        <p className={`${styles.paragraph}  mt-5 italic`}>
          Adamint is more than a platform, it's a vision to redefine how users experience Cardano.
          Founded on principles of simplicity, security, and empowerment, Adamint seamlessly
          integrates asset management, staking delegation, calendar organization, and real-time
          portfolio monitoring. Our commitment to the Cardano community propels us into a new era
          of decentralized finance. Join us on this transformative journey.
        </p>
      </div>
      <div className={`${layout.sectionImg} flex-col md:max-w-[60%] mt-[20px]`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
      <div className='absolute z-[0] top-[30%] -left-[15%] w-[40%] h-[35%] rounded-full bg-cyan-800/20 blur-[100px] pointer-events-none' />

    </section>
  )
}

export default Business