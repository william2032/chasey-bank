import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl  py-8 px-6 feedback-card">
    <img src={quotes} alt="double_quotes" className="w-[42.6px] h-6 object-contain" />
    <p className="my-6 py-4  text-white dark:text-neutral-300  text-2xl text-left ">
      {content}
    </p>

    <div className="flex gap-8 items-center md:grid-cols-2 lg:gap-12">
      <div className="mb-12 md:mb-0 sm:justify-start">
        <div className="mt-8  pt-8 flex justify-center text-center">
          <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full text-center" />
          <div className="gap-2 mx-4 justify-center">
            <h4 className="font-poppins  font-semibold text-xl leading-[32px] text-white">
              {name}

            </h4>
            <p className="font-poppins  font-medium text-xl mb-4 text-gray-600 dark:text-neutral-300">
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);



export default FeedbackCard;