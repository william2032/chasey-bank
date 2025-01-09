import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedBack";

const Testimonials = () => (
  <section id="clients" className={` flex-col relative py-6 `}>

    <div className="w-full flex  mb-10 ">
      <h2 className={styles.heading2}>
        What People are <br className="sm:block hidden" /> saying about us
      </h2>
      <div className="w-full  md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px] `}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;