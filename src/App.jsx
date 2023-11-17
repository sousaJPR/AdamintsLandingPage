import styles from './style';
import { Navbar, Hero, About, Features, Roadmap, FAQ, Footer, ScrollFadeInSection } from './components/';
import { arrowUp } from './assets';

const App = () => {
  const fadeIn = (Component) => (
    <ScrollFadeInSection key={Component.name}>
      <Component />
    </ScrollFadeInSection>
  );
  return (
    <div className='bg-primary w-full h-screen overflow-y-scroll no-scrollbar sm:snap-y sm:snap-mandatory'>
      <Navbar />
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} ${styles.paddingY}`}>
          {fadeIn(Hero)}
          {fadeIn(About)}
          {fadeIn(Features)}
          {fadeIn(Roadmap)}
          {fadeIn(FAQ)}
          {fadeIn(Footer)}
        </div>
      </div>
      {/* Bottom right Light */}
      <a href='#home' >
        <div className='fixed z-[2] bottom-10 right-5 sm:bottom-10 sm:right-10 bg-black-gradient-2 w-[35px] h-[35px] 
        rounded-2xl p-2 shadow-sm shadow-cyan-300/40 hover:-translate-y-0.5 duration-300'>
        <img src={arrowUp}/>
      </div></a>
    </div>
  )
}

export default App