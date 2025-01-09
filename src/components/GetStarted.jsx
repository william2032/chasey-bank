import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (

  // add animation effect on hover
  <div className={`${styles.flexCenter}   md:flex-col  w-36 h-[140px] p-1 rounded-full bg-blue-gradient  cursor-pointer sm:flex-1 flex-col `}>
    <div className={`${styles.flexCenter} flex-col  bg-discount-gradient w-full h-full rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Get</span>
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-6 h-[23px] object-contain" />
      </div>

      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>


  </div>

);

export default GetStarted;