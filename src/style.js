const styles = {
    boxWidth: "xl:max-w-[1380px] w-full",
  
    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[46.8px] w-full",
    heading3: "font-poppins font-semibold xs:text-[38px] text-[30px] text-white xs:leading-[66.8px] leading-[56.8px] w-full",
    headingFaq: "font-poppins font-normal xs:text-[24px] text-[18px] text-dimWhite w-full",
    paragraph: "font-poppins font-normal text-dimWhite text-[14px] ss:text-[18px] leading-[30.8px]",
    paragraphFaq: "font-poppins font-normal text-dimWhite text-[16px] leading-[30.8px] px-12 py-4",
  
    flexCenter: "flex justify-center items-center",
    flexRoadmap: "flex flex-column justify-center ",
    flexStart: "flex justify-center items-start md:pr-10",
    flexEnd: "flex justify-center sm:text-right sm:pl-10",
  
    paddingX: "px-16",
    paddingY: "py-20 md:py-2",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",

    linkStyle: {
      color: 'cyan',
    },
  };
  
  export const layout = {
    section: `flex flex-col md:flex-row  ${styles.paddingY} sm:h-screen`,
    faq: `flex flex-col ${styles.paddingY} sm:h-screen items-center justify-center`,
    roadmapSection: `flex flex-col ${styles.paddingY} sm:h-screen w-full justify-center`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY} sm:h-screen py-20`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative h-screen`,
    sectionImg: `${styles.flexCenter} ml-0 mt-0 relative md:h-screen`,
  
    sectionTextLeft: `flex-1 ${styles.flexEnd} flex-col h-screen`,
    sectionTextRight: `flex-1 ${styles.flexStart} flex-col h-screen`,
  };
  
  export default styles;