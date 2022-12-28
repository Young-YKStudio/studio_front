import { Demo_Button_Black } from "../Button/button";

const DemoFBStarter_Landing3 = (props) => {
  return (
      // move down pics = 5(bbq6), 6(bbq7), 1(bbq2)
    <div className="bg-yellow-400 w-full flex flex-col md:flex-row ">
      <div className="p-20 md:w-1/2 lg:w-7/12 w-full bg-bbq7 bg-center bg-cover">
      </div>
      <div className="p-20 h-96 bg-yellow-400 md:w-1/2 lg:w-5/12 w-full md:h-auto">
        <h1 className="font-black mb-8 text-2xl">CATERING</h1>
        <p className="leading-6 mb-8">We'll bring the 'que to you! From backyard bbq's, holiday celebrations or hundred-person events, our Barbecrew and catering truck can do it all. Serving thoughtfully crafted sides, vegan and vegetarian options, to the BBQ classics from all the regions of America, and all the corners of the globe — it’s all here.</p>
        <Demo_Button_Black link="#" text="Check Catering" />
      </div>
    </div>
  );
}
export default DemoFBStarter_Landing3;