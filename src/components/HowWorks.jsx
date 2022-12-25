import { MdPhoneIphone } from "react-icons/md";
import { GiKnifeFork, GiChickenOven } from "react-icons/gi";

const HowWorks = () => {
  return (
    <div className="max-w-[1600px] px-14 py-8 mx-auto">
      <h1 className="text-4xl text-center">How it works</h1>
      <div className="grid justify-items-center my-8 gap-12 grid-cols-1 md:grid-cols-3">
        <div className="border rounded-md shadow-md p-6 flex flex-col items-center w-full">
          <MdPhoneIphone size={30} />
          <p className="text-2xl font-medium py-2 text-center">Order via App</p>
          <p className="text-gray-500 text-center py-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            eos molestiae facilis recusandae quam, accusantium dolores ipsum aut
            blanditiis repudiandae debitis placeat quibusdam expedita quae!
          </p>
        </div>

        <div className="border rounded-md shadow-md p-6 flex flex-col items-center w-full">
          <GiKnifeFork size={30} />
          <p className="text-2xl font-medium py-2 text-center">Choose your food</p>
          <p className="text-gray-500 text-center py-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            eos molestiae facilis recusandae quam, accusantium dolores ipsum aut
            blanditiis repudiandae debitis placeat quibusdam expedita quae!
          </p>
        </div>

        <div className="border rounded-md shadow-md p-6 flex flex-col items-center w-full">
          <GiChickenOven size={30} />
          <p className="text-2xl font-medium py-2 text-center">Enjoy!</p>
          <p className="text-gray-500 text-center py-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            eos molestiae facilis recusandae quam, accusantium dolores ipsum aut
            blanditiis repudiandae debitis placeat quibusdam expedita quae!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
