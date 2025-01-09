import styles from "../style";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-lg outline-none ${styles}`}>
    Get Started
  </button>
);

export default Button;